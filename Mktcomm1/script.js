const allCases = [
    {
        title: "Case 1: New beverage launch",
        text: "A challenger drink brand is unknown in the category and wants top-of-mind salience within 12 weeks.",
        difficulty: "foundational",
        correct: "building",
        explanation: "Brand Building is best because the priority is memory structure creation, not immediate transaction volume."
    },
    {
        title: "Case 2: Feature-rich software",
        text: "Buyers are aware of your SaaS product, but cannot explain why it is better than two incumbents.",
        difficulty: "foundational",
        correct: "information",
        explanation: "Brand Information is best because differentiation requires cognitive processing of product evidence."
    },
    {
        title: "Case 3: End-of-quarter pipeline",
        text: "Sales leadership needs fast movement from consideration to paid pilot in the next 30 days.",
        difficulty: "foundational",
        correct: "action",
        explanation: "Brand Action is best because the business need is behavioral conversion with urgency."
    },
    {
        title: "Case 4: Mature category refresh",
        text: "Share is stable, but emotional relevance has drifted and younger buyers do not feel connected.",
        difficulty: "foundational",
        correct: "building",
        explanation: "Brand Building is best because affective resonance must be restored before response rates improve."
    },
    {
        title: "Case 5: High traffic, low close rate",
        text: "Your campaign drives traffic, yet many visitors fail to request demos due to weak value articulation.",
        difficulty: "foundational",
        correct: "information",
        explanation: "Brand Information is best because traffic exists, but cognitive clarity and differentiation are missing."
    },
    {
        title: "Case 6: Limited-time promo week",
        text: "A DTC apparel brand has seven days to convert cart abandoners with promotional communication.",
        difficulty: "foundational",
        correct: "action",
        explanation: "Brand Action is best because the campaign objective is immediate purchase behavior during a short window."
    },
    {
        title: "Case 7: Reputation recovery",
        text: "After a quality issue, customers no longer feel emotionally secure with the brand despite stable distribution.",
        difficulty: "advanced",
        correct: "building",
        explanation: "Brand Building is best because restoring trust and emotional confidence is an affective challenge."
    },
    {
        title: "Case 8: Technical buyer committee",
        text: "An enterprise cybersecurity vendor must convince IT and finance teams with proof points and architecture details.",
        difficulty: "advanced",
        correct: "information",
        explanation: "Brand Information is best because committee decisions require cognitive processing and evidence-based differentiation."
    },
    {
        title: "Case 9: New app onboarding",
        text: "A fintech app has high installs but needs users to complete KYC and make their first funded transaction quickly.",
        difficulty: "advanced",
        correct: "action",
        explanation: "Brand Action is best because the critical issue is progression to specific completion behaviors."
    },
    {
        title: "Case 10: Commodity category premiumization",
        text: "A private-label grocery brand wants to move from price association to lifestyle relevance.",
        difficulty: "advanced",
        correct: "building",
        explanation: "Brand Building is best because premiumization starts with emotional meaning and identity."
    },
    {
        title: "Case 11: Product line comparison confusion",
        text: "Shoppers understand your brand name but cannot distinguish among basic, plus, and pro product tiers.",
        difficulty: "advanced",
        correct: "information",
        explanation: "Brand Information is best because the challenge is reducing cognitive confusion through clear product knowledge."
    },
    {
        title: "Case 12: Retail launch weekend",
        text: "A consumer electronics brand needs footfall and same-weekend purchases at partner stores after launch ads.",
        difficulty: "advanced",
        correct: "action",
        explanation: "Brand Action is best because success is defined by near-term measurable purchase behavior."
    },
    {
        title: "Case 13: Employer brand in consulting",
        text: "A consulting firm is losing top MBA applicants who perceive the culture as transactional and exhausting.",
        difficulty: "executive",
        correct: "building",
        explanation: "Brand Building is best because talent attraction requires affective connection and brand affinity."
    },
    {
        title: "Case 14: Healthcare treatment education",
        text: "A medtech company needs physicians to understand how its device improves outcomes versus standard care.",
        difficulty: "executive",
        correct: "information",
        explanation: "Brand Information is best because adoption depends on factual differentiation and cognitive acceptance."
    },
    {
        title: "Case 15: B2B webinar to MQL conversion",
        text: "Attendance is strong, but few participants request follow-up demos within 48 hours.",
        difficulty: "executive",
        correct: "action",
        explanation: "Brand Action is best because the gap is in post-event conversion behavior, not awareness."
    },
    {
        title: "Case 16: NGO donor base rejuvenation",
        text: "A nonprofit wants younger donors to feel personally connected to its mission before giving frequency declines.",
        difficulty: "executive",
        correct: "building",
        explanation: "Brand Building is best because donor commitment starts with emotional salience and identification."
    },
    {
        title: "Case 17: Telecom plan-switch decision",
        text: "Customers think all plans are similar and need clearer evidence of network reliability and total-cost advantage.",
        difficulty: "executive",
        correct: "information",
        explanation: "Brand Information is best because the barrier is cognitive differentiation between alternatives."
    },
    {
        title: "Case 18: Subscription renewal push",
        text: "A streaming platform needs dormant users to reactivate before annual renewal deadlines.",
        difficulty: "executive",
        correct: "action",
        explanation: "Brand Action is best because the objective is specific, time-bound reactivation behavior."
    }
];

const labelMap = {
    building: "Brand Building",
    information: "Brand Information",
    action: "Brand Action"
};

const labRules = {
    awareness: {
        response: "affective",
        metrics: ["adRecall", "brandRecall", "positiveAttitude"],
        route: "Brand Building"
    },
    differentiate: {
        response: "cognitive",
        metrics: ["contentRecall", "positiveAttitude"],
        route: "Brand Information"
    },
    convert: {
        response: "behavioral",
        metrics: ["websiteVisits", "inquiries", "purchaseRate"],
        route: "Brand Action"
    }
};

let caseState = [];
let activeResponse = "affective";
let displayedCases = [];
let currentDifficulty = "all";
let shuffleMode = false;

document.addEventListener("DOMContentLoaded", () => {
    setupCaseControls();
    regenerateCaseDeck();
    setupResponseChips();
    setupLabEvaluator();
    setupReveal();
});

function setupCaseControls() {
    const difficultyFilter = document.getElementById("difficultyFilter");
    const shuffleModeBtn = document.getElementById("shuffleModeBtn");
    const resetCasesBtn = document.getElementById("resetCasesBtn");

    difficultyFilter.addEventListener("change", (event) => {
        currentDifficulty = event.target.value;
        regenerateCaseDeck();
    });

    shuffleModeBtn.addEventListener("click", () => {
        shuffleMode = !shuffleMode;
        shuffleModeBtn.classList.toggle("active", shuffleMode);
        shuffleModeBtn.setAttribute("aria-pressed", String(shuffleMode));
        shuffleModeBtn.textContent = `Shuffle Mode: ${shuffleMode ? "On" : "Off"}`;
        regenerateCaseDeck();
    });

    resetCasesBtn.addEventListener("click", resetCurrentDeck);
}

function regenerateCaseDeck() {
    const filtered = allCases.filter((item) => currentDifficulty === "all" || item.difficulty === currentDifficulty);
    displayedCases = shuffleMode ? shuffledCopy(filtered) : [...filtered];
    resetCurrentDeck();
}

function resetCurrentDeck() {
    caseState = displayedCases.map(() => ({ answered: false, correct: false }));
    renderCaseCards();
    updateCaseMeta();
    updateScore();
}

function renderCaseCards() {
    const casesRoot = document.getElementById("cases");
    const totalCases = document.getElementById("totalCases");

    totalCases.textContent = String(displayedCases.length);
    casesRoot.innerHTML = "";

    if (displayedCases.length === 0) {
        casesRoot.innerHTML = "<p class=\"case-text\">No cases match this filter.</p>";
        return;
    }

    displayedCases.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = "case-card";
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p class="case-text">Difficulty: ${toTitle(item.difficulty)}</p>
            <p class="case-text">${item.text}</p>
            <div class="options">
                <button class="option-btn" data-choice="building">Brand Building</button>
                <button class="option-btn" data-choice="information">Brand Information</button>
                <button class="option-btn" data-choice="action">Brand Action</button>
            </div>
            <div class="feedback" id="feedback-${index}" aria-live="polite"></div>
        `;

        card.querySelectorAll(".option-btn").forEach((btn) => {
            btn.addEventListener("click", () => evaluateCase(index, btn.dataset.choice, card));
        });

        casesRoot.appendChild(card);
    });
}

function evaluateCase(index, choice, card) {
    if (caseState[index].answered) {
        return;
    }

    const item = displayedCases[index];
    const isCorrect = choice === item.correct;
    const feedback = card.querySelector(`#feedback-${index}`);
    const buttons = card.querySelectorAll(".option-btn");

    caseState[index] = { answered: true, correct: isCorrect };

    buttons.forEach((btn) => {
        btn.disabled = true;
        const route = btn.dataset.choice;
        if (route === item.correct) {
            btn.classList.add("correct");
        }
        if (route === choice && !isCorrect) {
            btn.classList.add("wrong");
        }
    });

    feedback.classList.add("show", isCorrect ? "good" : "bad");
    feedback.textContent = `${isCorrect ? "Correct." : "Not quite."} ${item.explanation} Best route: ${labelMap[item.correct]}.`;
    updateScore();
}

function updateScore() {
    const score = caseState.filter((item) => item.correct).length;
    document.getElementById("score").textContent = String(score);
}

function updateCaseMeta() {
    const meta = document.getElementById("caseMeta");
    const filterLabel = currentDifficulty === "all" ? "All levels" : toTitle(currentDifficulty);
    const shuffleLabel = shuffleMode ? "On" : "Off";
    meta.textContent = `Showing ${displayedCases.length} case${displayedCases.length === 1 ? "" : "s"} | Difficulty: ${filterLabel} | Shuffle: ${shuffleLabel}`;
}

function shuffledCopy(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function setupResponseChips() {
    const chips = document.querySelectorAll("#responseChips .chip");
    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            activeResponse = chip.dataset.response;
            chips.forEach((other) => other.classList.remove("active"));
            chip.classList.add("active");
        });
    });

    chips[0].classList.add("active");
}

function setupLabEvaluator() {
    const evaluateBtn = document.getElementById("evaluateBtn");
    evaluateBtn.addEventListener("click", evaluateLabFit);
}

function evaluateLabFit() {
    const goal = document.getElementById("goalSelect").value;
    const metric = document.getElementById("metricSelect").value;
    const feedback = document.getElementById("labFeedback");
    const rule = labRules[goal];

    const responseAligned = activeResponse === rule.response;
    const metricAligned = rule.metrics.includes(metric);

    const fitScore = Number(responseAligned) + Number(metricAligned);
    feedback.className = "lab-feedback";

    if (fitScore === 2) {
        feedback.classList.add("fit");
        feedback.textContent = `Strong fit. Your selections align with ${rule.route}. This objective-response-KPI chain is managerially coherent.`;
        return;
    }

    const responseHint = `Expected response: ${toTitle(rule.response)}.`;
    const metricHint = `High-fit KPIs: ${rule.metrics.map(toMetricLabel).join(", ")}.`;

    feedback.classList.add("mismatch");
    feedback.textContent = `Partial fit. Your objective implies ${rule.route}. ${responseHint} ${metricHint}`;
}

function toTitle(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function toMetricLabel(metric) {
    const labels = {
        adRecall: "Ad recall",
        brandRecall: "Brand recall",
        positiveAttitude: "Positive attitude",
        contentRecall: "Content recall",
        websiteVisits: "Website visits",
        inquiries: "Inquiries",
        purchaseRate: "Purchase rate"
    };
    return labels[metric] || metric;
}

function setupReveal() {
    const nodes = document.querySelectorAll(".reveal");
    nodes.forEach((node, idx) => {
        setTimeout(() => {
            node.classList.add("visible");
        }, idx * 90);
    });
}
