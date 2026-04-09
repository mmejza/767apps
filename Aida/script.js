// ─────────────────────────────────────────────
//  STAGE CLASSIFIER SCENARIOS (30 cases)
//  Students identify which AIDA stage the item
//  primarily represents.
// ─────────────────────────────────────────────
const classifyCases = [
  {
    title: "Super Bowl Spot",
    text: "Sixty million households watch a 30-second beer ad during the Super Bowl. The brand makes no call to action.",
    correct: "exposed",
    explanation: "The primary outcome is exposure — audiences encountered the message. Whether they encode it is a separate stage."
  },
  {
    title: "Out-of-Home Blitz",
    text: "A bank plasters its new savings-rate campaign across 4,000 bus shelters in seven metros. No response mechanism is included.",
    correct: "exposed",
    explanation: "Billboards create passive exposure. Exposure is the first and most broad stage of the hierarchy."
  },
  {
    title: "Podcast Pre-roll",
    text: "A DTC mattress brand runs 15-second unskippable audio ads at the top of 200 top-ranked podcasts.",
    correct: "exposed",
    explanation: "Unskippable pre-rolls guarantee message delivery. This is the exposure stage — the funnel entry point."
  },
  {
    title: "Instagram Discovery Feed",
    text: "A luxury skincare brand pays for top-of-feed placement in Instagram's discovery algorithm for a new serum launch.",
    correct: "exposed",
    explanation: "Paid discovery placement maximises reach/exposure. Engagement and recall are subsequent stages."
  },
  {
    title: "Post-campaign Recall Study",
    text: "A tracker survey asks consumers: 'In the past 30 days, have you seen or heard advertising for Brand X?' 38% answer yes.",
    correct: "recalled",
    explanation: "The 38% aided-recall figure directly measures the recalled-message stage of the hierarchy."
  },
  {
    title: "Jingle Effect",
    text: "A fast-food chain airs a jingle; one month later, focus groups spontaneously hum the tune when asked about the QSR category.",
    correct: "recalled",
    explanation: "Spontaneous recall of communication content (the jingle) is the 'Recalled message' stage."
  },
  {
    title: "Brand Linkage Gap",
    text: "Copy-testing reveals the ad is highly memorable — but only 22% of those who recall the ad can name the advertising brand.",
    correct: "recalled",
    explanation: "Brand linkage is a key measure of recall quality. Low linkage means the recall stage is not fully achieved."
  },
  {
    title: "Day-After Recall Score",
    text: "A pharmaceutical brand scores a 61 DAR (day-after recall) on a prime-time TV spot — well above norm.",
    correct: "recalled",
    explanation: "DAR is a direct measure of message recall — the second stage of the hierarchy."
  },
  {
    title: "QR Code Scan",
    text: "A CPG brand prints a QR code on packaging. 3.4% of purchasers scan it and land on the product microsite.",
    correct: "visited",
    explanation: "Scanning a QR code and arriving at a web property is a classic 'Visited web site' stage behaviour."
  },
  {
    title: "Search-Driven Landing Page",
    text: "A paid search campaign for a B2B vendor achieves a 4.2% click-through rate to the product solution page.",
    correct: "visited",
    explanation: "Clicking through to a web page is the 'Visited web site' stage — an intermediate behavioural response before purchase."
  },
  {
    title: "Email Click-Through",
    text: "A triggered post-exposure email achieves 14% CTR to a comparison white-paper page on the brand's site.",
    correct: "visited",
    explanation: "Following a link to the brand's owned digital property measures the web-visit stage of the hierarchy."
  },
  {
    title: "Social Story Swipe-Up",
    text: "An influencer mentions a supplement brand in an Instagram story; 8,200 viewers swipe up to the brand's site.",
    correct: "visited",
    explanation: "Swipe-up behaviour directly measures acquisition of site visitors — the 'Visited web site' stage."
  },
  {
    title: "Net Promoter Uplift",
    text: "Following a 90-day brand campaign, NPS increases from 24 to 41 among exposed consumers.",
    correct: "attitude",
    explanation: "NPS improvement post-campaign captures changed attitude toward the brand — the fourth stage."
  },
  {
    title: "Purchase Intent Shift",
    text: "Brand tracking shows that 'Would consider buying' scores rose from 31% to 48% after a brand purpose campaign.",
    correct: "attitude",
    explanation: "Purchase intent is an attitudinal measure. Attitude shifts are the precursor to trial in the hierarchy."
  },
  {
    title: "Sentiment Analysis Post-Launch",
    text: "Social listening shows negative brand mentions dropped from 34% to 11% in the quarter following a brand transparency push.",
    correct: "attitude",
    explanation: "Sentiment improvement reflects changed consumer attitude toward the brand."
  },
  {
    title: "Trust Score Recovery",
    text: "Post-recall-crisis communications restore brand trust scores to pre-crisis levels over two quarters.",
    correct: "attitude",
    explanation: "Trust is an attitudinal measure. Restoring it is by definition addressing the attitude-toward-brand stage."
  },
  {
    title: "Trial Coupon Redemption",
    text: "A new Greek yogurt brand distributes 1.2M sampling coupons; 6.8% are redeemed at checkout for a first purchase.",
    correct: "trial",
    explanation: "Coupon redemption for a first purchase is a direct measure of the initial-trial stage."
  },
  {
    title: "Free Trial Activation",
    text: "A SaaS PMT tool converts 12% of sign-ups to an activated free trial within seven days of the campaign.",
    correct: "trial",
    explanation: "First-activation of a product — whether free or paid — is the initial-trial stage."
  },
  {
    title: "First-Time Buyer Rate",
    text: "Post-launch data shows 18% of first-month purchasers had no prior purchase history with the brand.",
    correct: "trial",
    explanation: "New buyer acquisition is the definition of initial trial — converting a non-buyer to a first-time buyer."
  },
  {
    title: "Restaurant Grand Opening",
    text: "A fast-casual chain opens its first urban flagship; 900 people dine there on opening day, 82% of whom are first-time visitors.",
    correct: "trial",
    explanation: "First-visit dining is initial trial. The communication campaign that drove opening-day traffic produced a trial response."
  },
  {
    title: "Programmatic Impression Delivery",
    text: "A DSP confirms 44M verified display impressions served to in-market auto buyers over a 6-week campaign.",
    correct: "exposed",
    explanation: "Verified ad impression delivery is the exposure stage. Impression ≠ recall or action."
  },
  {
    title: "Connected TV Ad Completion",
    text: "A streaming ad achieves 94% video completion rate across 2.8M households for a personal finance brand.",
    correct: "exposed",
    explanation: "High completion rate means the message was delivered (exposure). Recall and downstream stages are separate."
  },
  {
    title: "Brand Awareness Study",
    text: "Unaided brand awareness in the target segment rose from 14% to 29% following campaign burst.",
    correct: "recalled",
    explanation: "Unaided awareness is a recall measure — consumers actively retrieving the brand from memory."
  },
  {
    title: "Trade Show Badge Scan",
    text: "Sales reps scan 3,400 attendee badges at a booth; traffic was driven by a pre-event email campaign.",
    correct: "visited",
    explanation: "Physical booth visits driven by campaign touchpoints are the offline equivalent of 'Visited web site.'"
  },
  {
    title: "Category Preference Shift",
    text: "In a blind brand-equity study, preference for Brand X over generic rose from 38% to 57% among heavy-category buyers.",
    correct: "attitude",
    explanation: "Category preference is an attitudinal dimension. A preference shift is the attitude-toward-brand stage."
  },
  {
    title: "Re-engagement Email Open",
    text: "A lapsed-user re-engagement campaign earns a 28% email open rate, indicating the subject line was noticed.",
    correct: "exposed",
    explanation: "Opening an email (noticing it) is exposure to the message. Recall, engagement, and action are subsequent."
  },
  {
    title: "Consideration Score",
    text: "A tracker reports that 'Would consider Brand X next time' increased 11 points among consumers who saw 3+ campaign exposures.",
    correct: "attitude",
    explanation: "Consideration is an upstream attitudinal response, not yet a behavioural one. This is the attitude stage."
  },
  {
    title: "App Install from Ad",
    text: "A mobile gaming company's UA campaign generates 220K app installs from video interstitial ads.",
    correct: "trial",
    explanation: "App installs represent initial trial — the first behavioural engagement with the product."
  },
  {
    title: "Product Page Dwell Time",
    text: "Retargeted users spend an average of 4.1 minutes on the brand's comparison page after clicking a display ad.",
    correct: "visited",
    explanation: "Time-on-site and page engagement directly measure the 'Visited web site' stage of the hierarchy."
  },
  {
    title: "Branded Search Volume",
    text: "After a burst of TV spend, branded search volume on Google rises 62% week-over-week.",
    correct: "recalled",
    explanation: "Branded search volume is a strong proxy for recall — consumers are actively retrieving the brand name from memory."
  }
];

// ─────────────────────────────────────────────
//  CAMPAIGN DIAGNOSTICS SCENARIOS (20 cases)
//  Students identify WHICH STAGE is failing
//  given observed campaign data.
// ─────────────────────────────────────────────
const diagCases = [
  {
    title: "Awareness Without Action",
    text: "A challenger insurance brand has 72% aided awareness but only a 2% quote-request rate. The category average is 9%.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Trial conversion gap",
    explanation: "Awareness is high (exposure and recall are working). The problem is converting positive consideration to initial action — a trial conversion problem, likely driven by attitude or friction at the visit/request stage."
  },
  {
    title: "The Invisible Campaign",
    text: "A telecom brand ran $8M in digital video. Post-campaign tracking shows aided recall of only 9% — below the 22% category benchmark.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Recall gap",
    explanation: "The campaign was served (exposure was purchased) but the message failed to encode in memory. This is a recall gap — creative or media frequency may be the root cause."
  },
  {
    title: "Clicks Without Conversions",
    text: "A fintech app campaign delivers 1.4M site visits from paid social. Of these, 0.3% sign up for a trial — vs. 3.1% industry norm.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Trial conversion gap",
    explanation: "Traffic to the site is strong (visit stage is achieved). The failure is converting site visitors to trial — likely a landing page, trust, or value-proposition problem."
  },
  {
    title: "Brand Hate",
    text: "A pharma brand's campaign generates strong recall (67%) but brand sentiment is net-negative, with 58% unfavourable.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Attitude gap",
    explanation: "Recall is strong, but the attitudinal response is negative. This is an attitude failure — the message is remembered but is working against the brand."
  },
  {
    title: "Reach Desert",
    text: "A regional craft beer brand launches a new IPA. Brand tracking shows <4% unaided awareness after 8 weeks.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Exposure gap",
    explanation: "With less than 4% awareness after 8 weeks, the primary problem is reach — not enough consumers are encountering the message at all."
  },
  {
    title: "The Unvisited Microsite",
    text: "An auto brand's TV spot builds strong recall (54%) but the campaign microsite receives only 0.4% of exposed consumers.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Visit gap",
    explanation: "Recall is solid, but consumers are not progressing to the web visit stage. The call-to-action or web-visit bridge in the message is insufficient."
  },
  {
    title: "Neutral and Stuck",
    text: "A B2B software vendor runs a 6-month awareness campaign. Recall among IT directors is 48%, but brand preference over incumbents is flat at 12%.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Attitude gap",
    explanation: "Recall is strong but preference hasn't shifted. This is an attitude problem — the campaign built memory but did not build favorable differentiation."
  },
  {
    title: "Lost in Transit",
    text: "A food delivery app spends heavily on influencer content, generating 18M total impressions. Three months later, only 11% of the target audience has heard of the brand.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Recall gap",
    explanation: "Impressions were served (exposure), but only 11% unaided awareness indicates most exposures did not encode in memory. Poor recall despite adequate reach."
  },
  {
    title: "The Compliment That Doesn't Convert",
    text: "Consumer focus groups describe the brand as 'likeable and authentic.' Brand attitude scores are positive. Yet trial rates for the new product are 1.8% after 3 months.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Trial conversion gap",
    explanation: "Attitude is positive — consumers like the brand. The bottleneck is moving from favorable attitude to actual new-product trial. This is a conversion/engagement problem."
  },
  {
    title: "Dark Funnel",
    text: "A luxury watch brand operates no paid digital, no website tracking, and no promotional pricing. Brand awareness is 91% among HNW consumers, yet new purchase intent is 8%.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Trial conversion gap",
    explanation: "Awareness, recall, and likely attitude are all strong. The barrier to first purchase (trial) is the issue — likely price, availability, or luxury-decision complexity."
  },
  {
    title: "Creative Clutter",
    text: "An FMCG brand has 62% category reach but only 18% of exposed consumers can recall the ad's key message.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Recall gap",
    explanation: "Reach is adequate, but message encoding is weak. This is a recall gap, suggesting the creative is not distinctive or compelling enough to leave a memory trace."
  },
  {
    title: "Mistrusted Messenger",
    text: "A financial services firm uses celebrity endorsement. Recall is 71%, but brand trust scores fall 8 points after the campaign.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Attitude gap",
    explanation: "High recall but declining trust means the message is remembered and hurting attitude — a serious attitude-stage failure requiring message repositioning."
  },
  {
    title: "Forgotten by Friday",
    text: "Brand X dominates Monday morning recall (73%) after a Sunday Prime-time ad. By Friday of the same week, recall drops to 19%.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Recall gap",
    explanation: "Rapid decay in recall indicates the message lacks stickiness — insufficient frequency, weak encoding, or no reinforcement to sustain memory."
  },
  {
    title: "The Unsent Form",
    text: "A B2B SaaS campaign drives users to a demo request page (2.4% CTR from email). But only 6% of page visitors complete the form.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Trial conversion gap",
    explanation: "The visit stage is achieved. The stall is at the final conversion step — completing the demo request form. This is a trial conversion problem at the visit-to-trial boundary."
  },
  {
    title: "Fragmented Reach",
    text: "A NGO's campaign is split across 14 micro-channels with a total budget of $180K. Post-campaign media analysis shows average frequency of 0.3 exposures per target.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Exposure gap",
    explanation: "Effective exposure requires sufficient frequency. At 0.3 average frequency, most targets never even encountered the message — a fundamental reach/exposure problem."
  },
  {
    title: "Sentiment Paradox",
    text: "A travel brand's content campaign goes viral (14M views), producing enthusiastic sentiment (+89% positive reactions). Bookings do not increase.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Trial conversion gap",
    explanation: "Exposure, recall, and attitude are all working. The campaign fails to translate positive sentiment into bookings (trial). A conversion bridge — offer, urgency, or CTA — is missing."
  },
  {
    title: "Zero Search Lift",
    text: "A major FMCG brand spends $30M on TV. Branded search volume barely changes. All other KPIs are unmeasured.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Recall gap",
    explanation: "Branded search is a reliable recall proxy. Flat search volume despite heavy spend suggests the creative is not encoding the brand name into active consumer memory."
  },
  {
    title: "The Loyal But Non-Trial",
    text: "An established brand has 87% positive attitude among current non-users. However, it has failed to attract first-time users for the past two years.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Trial conversion gap",
    explanation: "Non-users like the brand (attitude is healthy) but are not trialing it. The gap is between favorable attitude and initial purchase behaviour — a classic trial-conversion problem."
  },
  {
    title: "The Ghost Website",
    text: "An ethically sourced apparel brand has strong Instagram following (240K) and good sentiment. Direct-to-site traffic from social is only 0.4%.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Visit gap",
    explanation: "Social presence and attitude are strong, but the translation to web visits is failing. Weak CTA, poor link architecture, or absence of a compelling reason to click are causing the visit gap."
  },
  {
    title: "High Frequency, Low Recall",
    text: "A pharma brand's digital campaign achieves 9.4 average frequency. Yet post-campaign recall is 21%, below the 30% norm for the category.",
    options: ["Exposure gap", "Recall gap", "Attitude gap", "Visit gap", "Trial conversion gap"],
    correct: "Recall gap",
    explanation: "Frequency is high (exposure is achieved repeatedly) but recall is still below norm. This signals creative quality or message salience is preventing effective memory encoding."
  }
];

// ─────────────────────────────────────────────
//  FUNNEL ANALYST SCENARIOS (12 cases)
//  Students read a funnel dataset and answer
//  a strategic question.
// ─────────────────────────────────────────────
const funnelCases = [
  {
    title: "CPG New Launch Funnel",
    question: "Where is the single biggest efficiency opportunity in this funnel?",
    table: [
      { stage: "Target audience reached", n: "4,200,000", rate: "—", flag: false },
      { stage: "Recalled message",         n: "1,890,000", rate: "45%", flag: false },
      { stage: "Visited brand.com",         n: "378,000",  rate: "20%", flag: false },
      { stage: "Attitude: would consider",  n: "302,400",  rate: "80%", flag: false },
      { stage: "Initial trial (purchase)",  n: "15,120",   rate: "5%",  flag: true  }
    ],
    options: [
      "Increase reach to more consumers",
      "Improve message recall from exposure",
      "Drive more website visits from recallers",
      "Convert attitude to trial purchase"
    ],
    correct: "Convert attitude to trial purchase",
    explanation: "80% of website visitors form a positive attitude, but only 5% of those proceed to purchase. The trial conversion stage is the critical drop — likely needing a stronger CTA, in-store activation, or trial offer."
  },
  {
    title: "B2B Software Pipeline",
    question: "Which stage represents the weakest link in this acquisition funnel?",
    table: [
      { stage: "Impressions (LinkedIn/display)", n: "620,000", rate: "—",    flag: false },
      { stage: "Recalled / brand recognised",   n: "186,000", rate: "30%",   flag: true  },
      { stage: "Visited product page",           n: "130,200", rate: "70%",   flag: false },
      { stage: "Attitude: demo interest",        n: "117,180", rate: "90%",   flag: false },
      { stage: "Trial (demo booked)",            n: "46,872",  rate: "40%",   flag: false }
    ],
    options: [
      "Too few impressions served",
      "Recall rate from impressions is low",
      "Site-visit to attitude conversion",
      "Demo booking rate from interested leads"
    ],
    correct: "Recall rate from impressions is low",
    explanation: "Only 30% of those served impressions recall the brand — the weakest conversion in the funnel. Improving creative distinctiveness or targeting could double the downstream funnel volume."
  },
  {
    title: "Streaming Platform Re-engagement",
    question: "A dormant-user win-back campaign produces this funnel. What is the primary problem?",
    table: [
      { stage: "Dormant users emailed",     n: "900,000", rate: "—",   flag: false },
      { stage: "Email opened (exposed)",    n: "324,000", rate: "36%", flag: false },
      { stage: "Subject line recalled/clicked", n: "64,800", rate: "20%", flag: true },
      { stage: "Landing page visited",      n: "58,320",  rate: "90%", flag: false },
      { stage: "Reactivated (trial)",       n: "40,824",  rate: "70%", flag: false }
    ],
    options: [
      "Email delivery rate is too low",
      "Open-to-click (message recall/action) rate is low",
      "Landing page experience loses visitors",
      "Reactivation offer is not compelling"
    ],
    correct: "Open-to-click (message recall/action) rate is low",
    explanation: "Only 20% of openers acted on the message — the recall-to-action stage is failing. Subject lines and CTAs are not translating message exposure into forward motion."
  },
  {
    title: "Retail Launch — National CPG",
    question: "Budget is constrained. Which intervention would produce the highest funnel leverage?",
    table: [
      { stage: "Target HHs reached via TV",     n: "12,000,000", rate: "—",   flag: false },
      { stage: "Ad recalled (unaided)",          n: "2,400,000",  rate: "20%", flag: true  },
      { stage: "Searched / visited brand.com",   n: "1,200,000",  rate: "50%", flag: false },
      { stage: "Positive attitude post-visit",   n: "1,080,000",  rate: "90%", flag: false },
      { stage: "Initial retail trial",           n: "864,000",    rate: "80%", flag: false }
    ],
    options: [
      "Reduce TV spend and shift to digital",
      "Invest in better creative to lift recall",
      "Improve site content to lift post-visit attitude",
      "Add retail promotion to push trial from attitude"
    ],
    correct: "Invest in better creative to lift recall",
    explanation: "Recall is only 20%, the lowest conversion rate in the funnel. All downstream stages convert at 50–90%, meaning every point gained in recall multiplies heavily through the rest of the funnel."
  },
  {
    title: "Luxury Auto Consideration Funnel",
    question: "Where should the brand focus its next campaign budget?",
    table: [
      { stage: "High-income adults reached",    n: "800,000", rate: "—",   flag: false },
      { stage: "Brand recalled",                n: "680,000", rate: "85%", flag: false },
      { stage: "Visited configurator/site",     n: "136,000", rate: "20%", flag: true  },
      { stage: "Favorable attitude",            n: "122,400", rate: "90%", flag: false },
      { stage: "Test drive booked (trial)",     n: "24,480",  rate: "20%", flag: false }
    ],
    options: [
      "More broad-reach media to grow exposure",
      "Strengthen recall with more frequency",
      "Bridge from recall to website visit",
      "Improve test-drive conversion from attitude"
    ],
    correct: "Bridge from recall to website visit",
    explanation: "85% recall but only 20% visit rate is the bottleneck. The brand is remembered but consumers aren't taking the next step. Direct web-to-visit CTAs, targeted digital, and incentives to configure online would address this gap."
  },
  {
    title: "Pharma DTC Patient Funnel",
    question: "A specialty pharma brand's DTC campaign produces this funnel. What is the primary strategic issue?",
    table: [
      { stage: "Condition-aware patients reached", n: "3,500,000", rate: "—",   flag: false },
      { stage: "Ad recalled",                      n: "1,750,000", rate: "50%", flag: false },
      { stage: "Visited brand site",               n: "1,312,500", rate: "75%", flag: false },
      { stage: "Discussed with HCP (attitude)",    n: "131,250",   rate: "10%", flag: true  },
      { stage: "First prescription filled (trial)",n: "52,500",    rate: "40%", flag: false }
    ],
    options: [
      "Insufficient reach among patients",
      "Ad recall is below expectations",
      "Site visit to physician-discussion rate is critically low",
      "Prescription fill rate from HCP discussion"
    ],
    correct: "Site visit to physician-discussion rate is critically low",
    explanation: "Only 10% of site visitors take the attitude action of discussing with their doctor — the largest funnel drop. Better site messaging, patient empowerment tools, and conversation scripts could triple downstream trial volume."
  },
  {
    title: "University Enrollment Funnel",
    question: "An MBA program's recruitment campaign shows this funnel. What is limiting enrollment?",
    table: [
      { stage: "Target prospects reached (paid)",  n: "500,000", rate: "—",   flag: false },
      { stage: "Program recalled",                 n: "275,000", rate: "55%", flag: false },
      { stage: "Visited program page",             n: "220,000", rate: "80%", flag: false },
      { stage: "Positive consideration (attitude)", n: "176,000", rate: "80%", flag: false },
      { stage: "Applied (trial)",                  n: "3,520",   rate: "2%",  flag: true  }
    ],
    options: [
      "Increase paid media reach",
      "Improve message recall rate",
      "Improve site experience to build consideration",
      "Convert favorable attitude to application"
    ],
    correct: "Convert favorable attitude to application",
    explanation: "176,000 prospects are favorable, but only 2% apply. This is a severe trial-conversion failure — likely caused by application friction, ROI uncertainty, or timing mismatch. Nurture programs and conversion support would address this."
  },
  {
    title: "E-commerce Fashion Launch",
    question: "A DTC fashion brand new to market produces this funnel. What stage needs most urgent attention?",
    table: [
      { stage: "Impressions served (social/display)", n: "8,000,000", rate: "—",    flag: false },
      { stage: "Brand recalled",                      n: "400,000",   rate: "5%",   flag: true  },
      { stage: "Site visited",                        n: "300,000",   rate: "75%",  flag: false },
      { stage: "Positive attitude (engaged session)", n: "255,000",   rate: "85%",  flag: false },
      { stage: "First purchase (trial)",              n: "25,500",    rate: "10%",  flag: false }
    ],
    options: [
      "Brand recall — only 5% of impressions are remembered",
      "Site visit rate from recallers",
      "Attitude conversion during site visit",
      "Trial purchase from positive-attitude visitors"
    ],
    correct: "Brand recall — only 5% of impressions are remembered",
    explanation: "5% recall from 8M impressions is extremely low. Everything downstream converts well — the problem is that the vast majority of served impressions leave no memory trace. Creative quality and context are failing."
  },
  {
    title: "Nonprofit Donor Acquisition",
    question: "A charity's first-time-donor campaign shows this funnel. The charity wants to maximise new-donor acquisitions for its budget. What should it prioritise?",
    table: [
      { stage: "Target adults reached via OOH/TV",  n: "2,000,000", rate: "—",    flag: false },
      { stage: "Cause/org recalled",                n: "1,600,000", rate: "80%",  flag: false },
      { stage: "Visited donation page",             n: "320,000",   rate: "20%",  flag: true  },
      { stage: "Emotional attitude (moved/inspired)", n: "288,000", rate: "90%",  flag: false },
      { stage: "First donation made (trial)",       n: "86,400",    rate: "30%",  flag: false }
    ],
    options: [
      "Broad reach — increase awareness spend",
      "Recall — improve message memorability",
      "Drive more of the recalled audience to the donation page",
      "Improve the donation page conversion rate"
    ],
    correct: "Drive more of the recalled audience to the donation page",
    explanation: "80% recall is excellent, but only 20% visit the page. Closing this gap with stronger CTAs, QR codes, and direct-response messaging would significantly increase new donor volume."
  },
  {
    title: "Telecom Plan Switch Funnel",
    question: "A telecom provider runs a competitive conquest campaign. Identify the priority fix.",
    table: [
      { stage: "Competitor-brand users reached",   n: "5,000,000", rate: "—",   flag: false },
      { stage: "Campaign recalled",                n: "3,000,000", rate: "60%", flag: false },
      { stage: "Plan comparison page visited",     n: "2,400,000", rate: "80%", flag: false },
      { stage: "Favourable switch attitude",       n: "1,200,000", rate: "50%", flag: false },
      { stage: "Plan switched (trial)",            n: "60,000",    rate: "5%",  flag: true  }
    ],
    options: [
      "Reach more competitor users",
      "Improve recall rate of campaign",
      "Build more favourable attitude at visit stage",
      "Convert favourable switchers to action"
    ],
    correct: "Convert favourable switchers to action",
    explanation: "1.2M users hold a favourable switch attitude but 95% don't switch. Switching inertia is driving this trial-conversion failure. Limited-time offers, easy number-porting tools, or incentives would address this bottleneck."
  },
  {
    title: "Hotel Loyalty Program Funnel",
    question: "A hotel chain promotes its loyalty programme. What stage explains the gap between interest and enrolment?",
    table: [
      { stage: "Business travellers reached",      n: "1,000,000", rate: "—",   flag: false },
      { stage: "Programme recalled",               n: "700,000",   rate: "70%", flag: false },
      { stage: "Loyalty landing page visited",     n: "490,000",   rate: "70%", flag: false },
      { stage: "Positive programme attitude",      n: "441,000",   rate: "90%", flag: false },
      { stage: "First enrolment (trial)",          n: "44,100",    rate: "10%", flag: true  }
    ],
    options: [
      "Recall rate is insufficient",
      "Site visit to attitude conversion",
      "10% trial conversion despite 90% positive attitude",
      "The reach audience is too small"
    ],
    correct: "10% trial conversion despite 90% positive attitude",
    explanation: "The attitude stage is highly efficient, but only 10% of those positively disposed enroll. There is a significant action barrier — likely a complex signup process, unclear benefits actualisation, or lack of urgency. Simplifying enrollment is the priority fix."
  },
  {
    title: "Consumer Electronics Pre-order Funnel",
    question: "A new smartphone brand's launch campaign shows this data. Where is the most actionable gap?",
    table: [
      { stage: "Addressable consumers reached",   n: "10,000,000", rate: "—",   flag: false },
      { stage: "Product recalled",                n: "5,500,000",  rate: "55%", flag: false },
      { stage: "Spec page / site visited",        n: "1,100,000",  rate: "20%", flag: true  },
      { stage: "Positive purchase attitude",      n: "990,000",    rate: "90%", flag: false },
      { stage: "Pre-order placed (trial)",        n: "247,500",    rate: "25%", flag: false }
    ],
    options: [
      "Reach — not enough consumers are exposed",
      "Recall — too few retain the product message",
      "Visit — only 20% of recallers visit the site",
      "Trial — only 25% of interested visitors pre-order"
    ],
    correct: "Visit — only 20% of recallers visit the site",
    explanation: "5.5M people recall the product but only 1.1M (20%) visit the site to explore. This recall-to-visit gap is the largest proportional loss. Better digital retargeting, search investment, and stronger CTAs in top-of-funnel content would close this."
  }
];

// ─────────────────────────────────────────────
//  STAGE LABEL MAPS & SHARED UTILS
// ─────────────────────────────────────────────
const stageLabels = {
  exposed:  "Exposed to message",
  recalled: "Recalled message",
  visited:  "Visited web site",
  attitude: "Attitude toward brand",
  trial:    "Initial trial"
};

const stageBadgeClass = {
  exposed:  "badge-exposed",
  recalled: "badge-recalled",
  visited:  "badge-visited",
  attitude: "badge-attitude",
  trial:    "badge-trial"
};

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ─────────────────────────────────────────────
//  GENERIC CARD & SCORE ENGINE
// ─────────────────────────────────────────────
function buildOptionButtons(options, correctAnswer, cardEl, stateArr, index) {
  const optDiv = cardEl.querySelector(".options");
  const fbDiv  = cardEl.querySelector(".feedback");

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      if (stateArr[index].answered) return;
      const isCorrect = opt === correctAnswer;
      stateArr[index] = { answered: true, correct: isCorrect };

      optDiv.querySelectorAll(".option-btn").forEach((b) => {
        b.disabled = true;
        if (b.textContent === correctAnswer) b.classList.add("correct");
        if (b.textContent === opt && !isCorrect) b.classList.add("wrong");
      });

      fbDiv.className = `feedback show ${isCorrect ? "good" : "bad"}`;
      fbDiv.textContent = (isCorrect ? "Correct. " : "Not quite. ") + cardEl.dataset.explanation;
    });
    optDiv.appendChild(btn);
  });
}

// ─────────────────────────────────────────────
//  TAB 1 — STAGE CLASSIFIER
// ─────────────────────────────────────────────
let classifyState   = [];
let classifyDisplay = [];
let classifyFilter  = "all";
let classifyShuffle = false;

function renderClassify() {
  const root   = document.getElementById("classifyCards");
  const total  = document.getElementById("classifyTotal");
  const meta   = document.getElementById("classifyMeta");
  root.innerHTML = "";

  const filtered = classifyCases.filter(c => classifyFilter === "all" || c.correct === classifyFilter);
  classifyDisplay = classifyShuffle ? shuffleArray(filtered) : [...filtered];
  classifyState   = classifyDisplay.map(() => ({ answered: false, correct: false }));

  total.textContent = String(classifyDisplay.length);
  document.getElementById("classifyScore").textContent = "0";

  const filterLabel = classifyFilter === "all" ? "All stages" : stageLabels[classifyFilter];
  meta.textContent = `${classifyDisplay.length} scenarios | Filter: ${filterLabel} | Shuffle: ${classifyShuffle ? "On" : "Off"}`;

  if (classifyDisplay.length === 0) {
    root.innerHTML = "<p class='case-text'>No scenarios match this filter.</p>";
    return;
  }

  classifyDisplay.forEach((item, idx) => {
    const card = document.createElement("article");
    card.className = "case-card";
    card.dataset.explanation = item.explanation;

    const allOptions = shuffleArray(Object.values(stageLabels));

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="case-text">${item.text}</p>
      <div class="options"></div>
      <div class="feedback"></div>
    `;

    buildOptionButtons(allOptions, stageLabels[item.correct], card, classifyState, idx);
    card.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => updateScore("classify", classifyState, "classifyScore"));
    });

    root.appendChild(card);
  });
}

// ─────────────────────────────────────────────
//  TAB 2 — CAMPAIGN DIAGNOSTICS
// ─────────────────────────────────────────────
let diagState   = [];
let diagDisplay = [];
let diagShuffle = false;

function renderDiag() {
  const root  = document.getElementById("diagCards");
  const total = document.getElementById("diagTotal");
  const meta  = document.getElementById("diagMeta");
  root.innerHTML = "";

  diagDisplay = diagShuffle ? shuffleArray(diagCases) : [...diagCases];
  diagState   = diagDisplay.map(() => ({ answered: false, correct: false }));

  total.textContent = String(diagDisplay.length);
  document.getElementById("diagScore").textContent = "0";
  meta.textContent = `${diagDisplay.length} scenarios | Shuffle: ${diagShuffle ? "On" : "Off"}`;

  diagDisplay.forEach((item, idx) => {
    const card = document.createElement("article");
    card.className = "case-card";
    card.dataset.explanation = item.explanation;

    const shuffledOpts = shuffleArray(item.options);

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="case-text">${item.text}</p>
      <div class="options"></div>
      <div class="feedback"></div>
    `;

    buildOptionButtons(shuffledOpts, item.correct, card, diagState, idx);
    card.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => updateScore("diag", diagState, "diagScore"));
    });

    root.appendChild(card);
  });
}

// ─────────────────────────────────────────────
//  TAB 3 — FUNNEL ANALYST
// ─────────────────────────────────────────────
let funnelState   = [];
let funnelDisplay = [];
let funnelShuffle = false;

function renderFunnel() {
  const root  = document.getElementById("funnelCards");
  const total = document.getElementById("funnelTotal");
  const meta  = document.getElementById("funnelMeta");
  root.innerHTML = "";

  funnelDisplay = funnelShuffle ? shuffleArray(funnelCases) : [...funnelCases];
  funnelState   = funnelDisplay.map(() => ({ answered: false, correct: false }));

  total.textContent = String(funnelDisplay.length);
  document.getElementById("funnelScore").textContent = "0";
  meta.textContent = `${funnelDisplay.length} datasets | Shuffle: ${funnelShuffle ? "On" : "Off"}`;

  funnelDisplay.forEach((item, idx) => {
    const card = document.createElement("article");
    card.className = "case-card";
    card.dataset.explanation = item.explanation;

    // Build table HTML
    const rows = item.table.map(r =>
      `<tr>
        <td>${r.stage}</td>
        <td>${r.n}</td>
        <td class="${r.flag ? "highlight" : ""}">${r.rate}</td>
      </tr>`
    ).join("");

    const shuffledOpts = shuffleArray(item.options);

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="case-text" style="color:var(--ink);font-style:italic;margin-bottom:10px;">${item.question}</p>
      <table class="funnel-table">
        <thead><tr><th>Stage</th><th>Volume</th><th>Conv. Rate</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="options"></div>
      <div class="feedback"></div>
    `;

    buildOptionButtons(shuffledOpts, item.correct, card, funnelState, idx);
    card.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => updateScore("funnel", funnelState, "funnelScore"));
    });

    root.appendChild(card);
  });
}

// ─────────────────────────────────────────────
//  SHARED SCORE UPDATER
// ─────────────────────────────────────────────
function updateScore(type, stateArr, scoreId) {
  document.getElementById(scoreId).textContent =
    String(stateArr.filter(s => s.correct).length);
}

// ─────────────────────────────────────────────
//  TABS
// ─────────────────────────────────────────────
function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });
}

// ─────────────────────────────────────────────
//  CONTROL WIRING
// ─────────────────────────────────────────────
function wireControls() {
  // Classifier controls
  document.getElementById("classifyFilter").addEventListener("change", e => {
    classifyFilter = e.target.value;
    renderClassify();
  });
  wireToggle("shuffleClassifyBtn", v => { classifyShuffle = v; renderClassify(); });
  document.getElementById("resetClassifyBtn").addEventListener("click", renderClassify);

  // Diagnostics controls
  wireToggle("shuffleDiagBtn", v => { diagShuffle = v; renderDiag(); });
  document.getElementById("resetDiagBtn").addEventListener("click", renderDiag);

  // Funnel controls
  wireToggle("shuffleFunnelBtn", v => { funnelShuffle = v; renderFunnel(); });
  document.getElementById("resetFunnelBtn").addEventListener("click", renderFunnel);
}

function wireToggle(btnId, callback) {
  const btn = document.getElementById(btnId);
  let state = false;
  btn.addEventListener("click", () => {
    state = !state;
    btn.classList.toggle("active", state);
    btn.setAttribute("aria-pressed", String(state));
    btn.textContent = `Shuffle: ${state ? "On" : "Off"}`;
    callback(state);
  });
}

// ─────────────────────────────────────────────
//  REVEAL ANIMATION
// ─────────────────────────────────────────────
function setupReveal() {
  document.querySelectorAll(".reveal").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 100);
  });
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  wireControls();
  renderClassify();
  renderDiag();
  renderFunnel();
  setupReveal();
});
