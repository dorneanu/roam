console.log('Stoic.js loaded successfully');

// Related practices mapping - which practices complement each other
const relatedPracticesMap = {
    1: [2, 26, 22], 2: [1, 3, 27], 3: [27, 30, 4], 4: [5, 6, 32], 5: [4, 20, 6],
    6: [4, 5, 32], 7: [8, 25, 26], 8: [7, 21, 30], 9: [10, 11, 14], 10: [9, 20, 33],
    11: [38, 55, 9], 12: [37, 11, 14], 13: [39, 52, 14], 14: [17, 21, 15], 15: [16, 18, 38],
    16: [17, 15, 14], 17: [14, 16, 31], 18: [15, 38, 55], 19: [12, 20, 21], 20: [5, 10, 19],
    21: [8, 19, 27], 22: [1, 36, 37], 23: [32, 4, 6], 24: [25, 43, 28], 25: [7, 24, 26],
    26: [1, 25, 22], 27: [3, 30, 21], 28: [24, 37, 29], 29: [28, 22, 31], 30: [3, 27, 8],
    31: [17, 29, 36], 32: [4, 6, 23], 33: [10, 34, 35], 34: [33, 35, 31], 35: [33, 34, 36],
    36: [22, 31, 37], 37: [12, 22, 45], 38: [11, 15, 55], 39: [13, 40, 52], 40: [39, 41, 42],
    41: [40, 42, 51], 42: [40, 41, 43], 43: [42, 44, 24], 44: [43, 48, 52], 45: [37, 46, 48],
    46: [45, 48, 28], 47: [39, 41, 44], 48: [44, 45, 46], 49: [54, 53, 40], 50: [11, 38, 13],
    51: [41, 47, 52], 52: [39, 44, 51], 53: [49, 54, 12], 54: [49, 53, 55], 55: [11, 38, 54]
};

// All 55 Stoic Practices from "The Little Book of Stoicism" by Jonas Salzgeber
const stoicPractices = [
    {
        number: 1,
        category: "Preparing Practices",
        title: "The Stoic Art of Acquiescence",
        subtitle: "Accept And Love Whatever Happens",
        description: "Willing acceptance of external events, even those judged as 'bad'. By bringing one's will into harmony with reality, suffering (which stems from resisting reality) is minimized. Misfortunes happen for us, not against us, serving as nature's treatment to become better people.",
        action: "Today, when something unpleasant happens, pause and say: 'This is exactly what I needed to practice acceptance.' Notice how resistance creates suffering.",
        reflection: "What did I resist today? What would have changed if I had accepted it immediately?"
    },
    {
        number: 2,
        category: "Preparing Practices",
        title: "Undertake Actions with a Reserve Clause",
        subtitle: "If Nothing Prevents Me",
        description: "When planning actions, add the caveat 'if nothing prevents me,' thereby accepting that the outcome is ultimately beyond your direct control. This cultivates detachment from outcomes, helping to maintain tranquility and equanimity regardless of success or failure.",
        action: "Before important tasks today, mentally add: 'I will do this, if nothing prevents me.' Notice how this changes your relationship with the outcome.",
        reflection: "Did I stay calm when plans changed? How did the reserve clause help me maintain equanimity?"
    },
    {
        number: 3,
        category: "Preparing Practices",
        title: "What Stands in the Way Becomes the Way",
        subtitle: "Turn Obstacles Upside Down",
        description: "View difficulties and struggles not as obstacles, but as opportunities for growth and practice of virtue (courage, humility, patience, etc.). Every setback becomes raw material for building character.",
        action: "Identify one current obstacle in your life. Ask: 'What virtue can I practice because of this challenge?'",
        reflection: "How did my obstacle become an opportunity today? What did it teach me?"
    },
    {
        number: 4,
        category: "Preparing Practices",
        title: "Remind Yourself of the Impermanence of Things",
        subtitle: "Everything Changes",
        description: "Life is ephemeral and everything changes constantly, like a river flowing past. By acknowledging impermanence, attachment to possessions and people is reduced, diminishing fear of loss while increasing appreciation.",
        action: "Look at something you value today. Remind yourself: 'This is temporary, as am I.' Notice the shift in perspective.",
        reflection: "What felt less precious because I remembered its impermanence? Did this awareness increase or decrease my appreciation?"
    },
    {
        number: 5,
        category: "Preparing Practices",
        title: "Contemplate Your Own Death",
        subtitle: "Memento Mori - Remember You Must Die",
        description: "Periodically reflecting on mortality reduces irrational fear and enhances the appreciation and enjoyment of life. It focuses the mind on living with virtue now, rather than postponing important actions and sensible plans.",
        action: "Spend 5 minutes contemplating: 'If this were my last day, what would matter most? Am I living accordingly?'",
        reflection: "Did remembering my mortality change how I spent today? What became more important?"
    },
    {
        number: 6,
        category: "Preparing Practices",
        title: "Consider Everything as Borrowed from Nature",
        subtitle: "Temporary Loans",
        description: "Treat everything you possess (body, possessions, relationships, status) as temporarily loaned from nature. This prepares you to return these gifts when called upon, making no complaint, while appreciating them in the present.",
        action: "Choose one possession or relationship. Say: 'This is borrowed. I'm grateful while I have it and ready to return it.'",
        reflection: "What felt easier to appreciate when I saw it as borrowed rather than owned?"
    },
    {
        number: 7,
        category: "Preparing Practices",
        title: "Negative Visualization",
        subtitle: "Foreseeing Bad Stuff",
        description: "An imagination exercise where you anticipate possible negative future scenarios to prepare for and cope with them effectively and calmly. This trains emotional resilience and ensures you're not crushed when misfortune arises.",
        action: "Imagine one thing going wrong today. Mentally rehearse handling it with virtue. Notice how preparation reduces anxiety.",
        reflection: "Did I face what I visualized? Was I better prepared because of this practice?"
    },
    {
        number: 8,
        category: "Preparing Practices",
        title: "Voluntary Discomfort",
        subtitle: "Embrace Hardship",
        description: "Occasionally embrace discomfort (e.g., temporary poverty, cold showers, restricted diets) to train endurance, improve self-control, and quiet the appetite for material possessions. This expands your comfort zone.",
        action: "Choose one voluntary discomfort today (cold shower, skip a comfort, walk in uncomfortable weather). Embrace it willingly.",
        reflection: "How did voluntary discomfort expand my comfort zone? What did I learn about my resilience?"
    },
    {
        number: 9,
        category: "Preparing Practices",
        title: "Prepare Yourself for the Day",
        subtitle: "The Stoic Morning Routine",
        description: "Introspective rehearsal: meditate on your rational nature, ask how to achieve freedom from negative emotions and tranquility, and prepare to meet challenging people with patience and kindness.",
        action: "Spend 10 minutes before starting your day. Visualize challenges ahead. Plan how to respond with your highest self.",
        reflection: "Did my morning preparation help me throughout the day? Which situation benefited most from my rehearsal?"
    },
    {
        number: 10,
        category: "Preparing Practices",
        title: "Review Your Day",
        subtitle: "The Stoic Evening Routine",
        description: "A nightly reflection routine to review the day's actions, seeking to identify faults, successes, and ways to improve. This enhances mindfulness and self-control, as you know you'll be judged by your own court at night.",
        action: "Tonight, review your day: What went well? What could improve? How can I be better tomorrow?",
        reflection: "What pattern did I notice in my behavior today? What small change would make tomorrow better?"
    },
    {
        number: 11,
        category: "Preparing Practices",
        title: "Keep a Role Model in Mind",
        subtitle: "Contemplate the Stoic Sage",
        description: "Compare your actions against an ideal, such as the hypothetical Stoic Sage or a real person you admire. Asking 'What would they do?' creates a pause between stimulus and response, enabling a deliberate, virtuous choice.",
        action: "Choose a role model (real or imagined). Before important decisions today ask: 'What would they do in this situation?'",
        reflection: "How did my role model guide my choices today? Which decision was most influenced?"
    },
    {
        number: 12,
        category: "Preparing Practices",
        title: "Stoic Aphorisms",
        subtitle: "Keep Your 'Weapons' Ready at Hand",
        description: "Create and memorize succinct statements of fundamental principles (like a ready-at-hand Enchiridion) to counteract irrational thoughts in chaotic reality. These become mental tools accessible in any situation.",
        action: "Choose one Stoic principle. Write it down. Memorize it. Keep it 'ready at hand' for when you need it today.",
        reflection: "Which aphorism helped me most today? In what situation did I use it?"
    },
    {
        number: 13,
        category: "Preparing Practices",
        title: "Play Your Given Roles Well",
        subtitle: "Fulfill Your Duties",
        description: "Focus on fulfilling the duties appropriate to your various roles (e.g., human being, parent, citizen, friend). Playing your role well, even if others don't fulfill theirs, is living in agreement with nature and leads to a happy life.",
        action: "List your main roles. For each, ask: 'Am I fulfilling this role to the best of my ability?' Choose one to improve today.",
        reflection: "Which role needed more attention today? How did focusing on duties change my perspective?"
    },
    {
        number: 14,
        category: "Preparing Practices",
        title: "Eliminate the Nonessential",
        subtitle: "Is This Necessary?",
        description: "Cut out superfluous words and actions, focusing instead on essential matters to gain more time and tranquility. Ask at every moment: 'Is this necessary?' to filter out distractions.",
        action: "Before each activity today ask: 'Is this necessary? Does it align with my values?' Cut what doesn't.",
        reflection: "What nonessential activity consumed my time today? What essential thing had more space because I eliminated it?"
    },
    {
        number: 15,
        category: "Preparing Practices",
        title: "Forget Fame",
        subtitle: "Virtue Is Its Own Reward",
        description: "Be indifferent toward reputation and social status, recognizing that fame is short-lived and outside your control. Virtue should be its own reward, and satisfaction should be derived from virtuous behavior, not external approval.",
        action: "Do one good deed today without telling anyone. Find satisfaction in the deed itself, not in recognition.",
        reflection: "How did it feel to do good without recognition? Did I crave acknowledgment?"
    },
    {
        number: 16,
        category: "Preparing Practices",
        title: "Like a Minimalist: Live Simple",
        subtitle: "Want Less",
        description: "Live a simple, functional lifestyle and remain indifferent to material possessions (which are external and indifferent). True wealth lies in wanting less, as freedom is not achieved by satisfying desire, but by eliminating it.",
        action: "Identify one possession you could live without. Consider whether you truly need it or just want it.",
        reflection: "What did I realize I don't actually need? How does simplicity create freedom?"
    },
    {
        number: 17,
        category: "Preparing Practices",
        title: "Take Back Your Time",
        subtitle: "Cut Out News and Timewasters",
        description: "Guard time meticulously ('the one thing about which we should all be the toughest misers') and prioritize essential activities over nonessential ones like consuming news or excessive entertainment. Time is your most valuable, non-renewable resource.",
        action: "Track where your time goes today. Identify and eliminate one time-waster. Invest that time in something meaningful.",
        reflection: "What did I do with the time I reclaimed? How did it feel to be intentional with my time?"
    },
    {
        number: 18,
        category: "Preparing Practices",
        title: "Win at What Matters",
        subtitle: "Character Over Achievement",
        description: "Prioritize 'the love and practice of the virtues, forgetfulness of the passions, the knowledge of how to live and die' over professional expertise or status. Your character is your most valuable asset.",
        action: "Define what 'winning' means for your character, not your career. How are you doing in that competition?",
        reflection: "Did I win at what truly matters today? Where did I compromise character for convenience?"
    },
    {
        number: 19,
        category: "Preparing Practices",
        title: "Become an Eternal Student",
        subtitle: "Never Stop Learning",
        description: "Continuously pursue knowledge and wisdom to improve yourself. As 'warriors of the mind,' the goal is to digest the theory and put it into practice, not just to read about philosophy.",
        action: "Learn one new thing today related to living well. Then find a way to apply it immediately.",
        reflection: "What did I learn and how did I apply it? How am I different because of this knowledge?"
    },
    {
        number: 20,
        category: "Preparing Practices",
        title: "What Do You Have to Show for Your Years?",
        subtitle: "Live Purposefully",
        description: "Reflect on mortality and living purposefully rather than wasting time. Focus on making progress in your character and values, not accumulating achievements or possessions.",
        action: "Review the past year. What progress have you made in virtue? What would you want to show for this year?",
        reflection: "Am I proud of how I spent my time? What needs to change?"
    },
    {
        number: 21,
        category: "Preparing Practices",
        title: "Do What Needs to Get Done",
        subtitle: "Overcome Resistance",
        description: "Practice self-discipline to overcome inner resistance (laziness, lack of motivation) and perform necessary duties. Humans are made for exertion, not pleasure. Do what's required whether you feel like it or not.",
        action: "Identify one thing you've been avoiding. Do it now, regardless of how you feel. Action creates motivation.",
        reflection: "How did it feel to overcome resistance? Did motivation follow action?"
    },
    {
        number: 22,
        category: "Dealing with Yourself",
        title: "Your Judgment Harms You",
        subtitle: "Events Are Neutral",
        description: "External events are neutral, and it is your judgment or interpretation of an event that causes disturbance or harm. The power lies in wiping out this judgment immediately and taking responsibility for your own emotional state.",
        action: "When something 'bad' happens today, pause and ask: 'Is this actually bad, or just unexpected? What is my judgment adding?'",
        reflection: "Which judgment caused me unnecessary suffering today? What changed when I questioned it?"
    },
    {
        number: 23,
        category: "Dealing with Yourself",
        title: "How to Deal With Grief",
        subtitle: "Gratitude for What Was",
        description: "Conquer grief using reason rather than deceiving it. While nature requires some initial sorrow, excessive grief is vain and must be stopped. Focus on being grateful for the time enjoyed with what was lost.",
        action: "If grieving something or someone, spend time remembering what you're grateful for about what you had.",
        reflection: "Can I hold both grief and gratitude together? How does gratitude transform loss?"
    },
    {
        number: 24,
        category: "Dealing with Yourself",
        title: "Choose Courage and Calm over Anger",
        subtitle: "Anger Is Brief Madness",
        description: "View anger (a desire to repay suffering) as brief madness and toxic. Reject the first signs of anger and use reason, which is more reliable than rash anger, to pursue necessary action calmly.",
        action: "When anger arises, force physical relaxation. Take 10 deep breaths. Then respond with reason, not rage.",
        reflection: "What happened when I chose calm over anger? Was the outcome better?"
    },
    {
        number: 25,
        category: "Dealing with Yourself",
        title: "Beat Fear with Preparation and Reason",
        subtitle: "Familiarize Yourself with Fear",
        description: "Fear is often a result of imagination and wanting things outside your control. Anticipate fears (preparation) and confront them rationally and calmly in your mind until they become familiar and lose their power.",
        action: "Name your current fear. Examine it rationally: What's the worst case? How would you handle it? Prepare mentally.",
        reflection: "Did my fear shrink when I examined it closely? Was it as scary as I imagined?"
    },
    {
        number: 26,
        category: "Dealing with Yourself",
        title: "Blame Your Expectations",
        subtitle: "Align with Reality",
        description: "Reduce frustration and anger by aligning your expectations with reality, rather than demanding the world conform to your desires. Unmet, overly optimistic expectations are the cause of disappointment.",
        action: "Identify one expectation you hold. Ask: 'Is this realistic? Is it within my control?' Adjust accordingly.",
        reflection: "Which unrealistic expectation caused frustration today? How did adjusting it help?"
    },
    {
        number: 27,
        category: "Dealing with Yourself",
        title: "Pain and Provocation: Great Opportunities for Virtue",
        subtitle: "Challenges Build Character",
        description: "Treat every challenge, physical or emotional, as a chance to practice virtues like patience, endurance, and self-restraint. Nothing can prevent the choice to respond with virtue, effectively turning setbacks into raw material for growth.",
        action: "When challenged today, ask: 'What virtue can I practice right now? Patience? Courage? Temperance?'",
        reflection: "Which challenge became an opportunity for virtue? What virtue did I practice?"
    },
    {
        number: 28,
        category: "Dealing with Yourself",
        title: "The Equanimity Game",
        subtitle: "Recover Your Balance Quickly",
        description: "When thrown off balance by minor circumstances, the goal is to recover your self-control as quickly as possible. Consistent practice of returning to a balanced mind (equanimity) increases mastery.",
        action: "Time how quickly you can return to calm after being disturbed. Try to beat your record each time.",
        reflection: "Am I getting faster at recovering equanimity? What helps me return to balance?"
    },
    {
        number: 29,
        category: "Dealing with Yourself",
        title: "The Anti-Puppet Mindset",
        subtitle: "Cut the Strings",
        description: "Prevent external events (weather, news, others' opinions) and internal impulses from dictating your emotional state or actions. Cut the strings that pull the mind by grounding choices in deep values. Steps: 1) Don't get upset; 2) Do the right thing.",
        action: "Notice what's trying to 'pull your strings' today - what's controlling your mood? Consciously choose your response based on values, not reactions.",
        reflection: "What tried to control me like a puppet? Did I stay in control of my responses?"
    },
    {
        number: 30,
        category: "Dealing with Yourself",
        title: "Life Is Supposed to Be Challenging",
        subtitle: "Difficulties Are Training",
        description: "Adopt the mindset that difficulties are inevitable and necessary for personal growth and character development, viewing them as opportunities for training, like a sparring partner helping you improve.",
        action: "Reframe one current difficulty as training. What skill or virtue is it helping you develop?",
        reflection: "How did this challenge make me stronger? What am I learning from this 'sparring partner'?"
    },
    {
        number: 31,
        category: "Dealing with Yourself",
        title: "What's so Troublesome Here and Now?",
        subtitle: "Focus on the Present",
        description: "Focus on the extreme present moment, recognizing that the past is gone and the future is uncertain. When overwhelmed, isolate the challenge and ask: 'What is there in this work which I cannot endure or support?'",
        action: "When stressed, ask: 'What is actually difficult in this exact moment, right now?' Not yesterday, not tomorrow - now.",
        reflection: "How much of my stress was about the future or past, not the present? What changed when I focused on now?"
    },
    {
        number: 32,
        category: "Dealing with Yourself",
        title: "Count Your Blessings",
        subtitle: "Practice Gratitude",
        description: "Appreciate what you currently possess and be thankful for all that has been given. This practice in gratitude should be done while guarding against excessive attachment, ready to surrender things when they are taken away.",
        action: "List 10 things you're grateful for right now. Include small, often-overlooked things. Really feel the gratitude.",
        reflection: "What did I take for granted until I counted it as a blessing? How does gratitude change my perspective?"
    },
    {
        number: 33,
        category: "Dealing with Yourself",
        title: "Other-ize",
        subtitle: "View Yourself from Outside",
        description: "Step outside yourself when inconvenience or misfortune occurs and imagine how you would react if the same event happened to someone else, like a friend. This provides perspective, reduces self-pity, and helps maintain a balanced mind.",
        action: "When something bad happens to you, imagine giving advice to a friend in the same situation. Then follow that advice.",
        reflection: "What advice did I give myself as if I were my own friend? Was I kinder to myself this way?"
    },
    {
        number: 34,
        category: "Dealing with Yourself",
        title: "Take the Bird's-Eye View",
        subtitle: "See the Bigger Picture",
        description: "An imaginative exercise to look at yourself and all human affairs from a vast distance (e.g., from the sky or space). This minimizes the perceived importance of your troubles and reminds you of the brevity of life and the immensity of the universe.",
        action: "Imagine viewing your current problem from space. How significant does it seem in the vastness of time and space?",
        reflection: "What looked smaller from the bird's-eye view? Did this perspective help me let go?"
    },
    {
        number: 35,
        category: "Dealing with Yourself",
        title: "It's the Same Old Things",
        subtitle: "Nothing Is Truly New",
        description: "Recognize that most human experiences, challenges, and emotions are perennial and not unique to the present time. This helps avoid taking things too seriously and reduces the surprise caused by 'trifles'.",
        action: "Remember: humans have faced this same challenge for thousands of years. You're not alone in this experience.",
        reflection: "How did recognizing the universality of my experience help? Did it feel less personal?"
    },
    {
        number: 36,
        category: "Dealing with Yourself",
        title: "Observe Objectively",
        subtitle: "Strip Away Judgments",
        description: "Analyze an object or situation as objectively and value-free as possible, reducing complex things to their basic constituents (e.g., wine is just fermented grape juice). This prevents attributing excessive importance or meaning to external things.",
        action: "Describe one anxiety-inducing situation today using only neutral, factual language. No judgments, just facts.",
        reflection: "How did objective observation change my emotional response? What judgment was I adding?"
    },
    {
        number: 37,
        category: "Dealing with Yourself",
        title: "Avoid Rashness: Test Your Impressions",
        subtitle: "Pause Before Reacting",
        description: "The core practice of placing a pause between stimulus and emotional impression/response to prevent impulsive behavior. Spot the initial impression and test it, primarily by asking: 'Is this something that is, or is not, in my control?' The ability to postpone reaction is foundational for living with virtue.",
        action: "Before reacting to anything today, pause for 3 breaths. Test the impression: 'Is this in my control? Is my judgment accurate?'",
        reflection: "What changed when I paused before reacting? Which reaction did I avoid?"
    },
    {
        number: 38,
        category: "Dealing with Yourself",
        title: "Do Good, Be Good",
        subtitle: "Virtue Now",
        description: "True value lies in character and actions. You must become good now and do good for its own sake, as virtue is its own reward, and external recognition is superfluous.",
        action: "Act virtuously in one situation today without any expectation of reward, recognition, or result. Just be good.",
        reflection: "How did virtue feel as its own reward? Did I need external validation?"
    },
    {
        number: 39,
        category: "Dealing with Others",
        title: "We Are All Limbs of the Same Body",
        subtitle: "Recognize Interconnection",
        description: "Recognize the interconnectedness of humanity, where all individuals are limbs of the same system and are 'made for cooperation'. Actions must contribute to the common welfare, as this is the only way to achieve a good life.",
        action: "Do something today that benefits your community or humanity, not just yourself. Act as a limb of the larger body.",
        reflection: "How did contributing to the whole feel different from serving only myself? What was the impact?"
    },
    {
        number: 40,
        category: "Dealing with Others",
        title: "Nobody Errs on Purpose",
        subtitle: "Assume Good Intent",
        description: "Assume that people who act wrongly do so because they are mistaken or lack wisdom (Socrates' doctrine: 'Nobody does wrong willingly'). This perspective encourages patience, understanding, and forgiveness, treating the wrongdoer's mistake as an inevitable consequence of human nature.",
        action: "When someone wrongs or annoys you today, assume they're doing their best with their current understanding.",
        reflection: "How did assuming good intent change my reaction to others? Was forgiveness easier?"
    },
    {
        number: 41,
        category: "Dealing with Others",
        title: "Find Your Own Faults",
        subtitle: "Look Inward First",
        description: "When offended by another's wrongdoing, immediately turn inward and consider your own similar failings. This diminishes anger and encourages a mild, understanding self-judgment that should be extended to others.",
        action: "When annoyed by someone today, ask: 'When have I done something similar? What's my version of this fault?'",
        reflection: "What fault did I find in myself that matched what annoyed me in others? Did this self-awareness help?"
    },
    {
        number: 42,
        category: "Dealing with Others",
        title: "Forgive and Love Those Who Stumble",
        subtitle: "Compassion for the Misguided",
        description: "Show compassion and forgiveness toward wrongdoers, seeing them as misguided relatives or like children. It is a special privilege and duty to 'love even those who stumble' because they injure themselves when they act unjustly.",
        action: "Forgive someone today who wronged you. See their mistake as human fallibility, not malicious intent.",
        reflection: "How did forgiveness free me from resentment? Do I feel lighter?"
    },
    {
        number: 43,
        category: "Dealing with Others",
        title: "Pity Rather than Blame the Wrongdoer",
        subtitle: "They Harm Themselves Most",
        description: "View those who do wrong as 'blinded and lamed in their most sovereign faculties' (reason). If you remember this 'injury' - that they've damaged their own capacity for wisdom - anger and indignation are replaced by pity.",
        action: "When someone acts badly, think: 'They harm themselves most of all. Their character suffers more than I do.'",
        reflection: "Did pity replace my anger today? How did this perspective shift my emotions?"
    },
    {
        number: 44,
        category: "Dealing with Others",
        title: "Kindness Is Strength",
        subtitle: "Respond with Kindness",
        description: "Treat every encounter as an opportunity for kindness. Sincere kindness is described as 'invincible' and a sign of great strength, especially when responding to rudeness or meanness. Kindness is not weakness - it's mastery.",
        action: "Respond to rudeness or difficulty with deliberate, genuine kindness today. Make it your superpower.",
        reflection: "How did kindness prove to be stronger than retaliation? What was the result?"
    },
    {
        number: 45,
        category: "Dealing with Others",
        title: "How to Deal with Insults",
        subtitle: "Let It Go",
        description: "Strategies include pausing to evaluate the truth and source of the insult, or viewing the insulter as a childish person who deserves pity. The best revenge is to be unlike them (unlikeness). The ultimate goal is to become invulnerable by recognizing that an insult is only harmful if you judge it to be so.",
        action: "If insulted today, pause. Consider: 'Is this true? If yes, I'll improve. If no, why let it affect me?' Either way, don't be offended.",
        reflection: "What insult lost its power when I chose not to accept it? Did I become invulnerable?"
    },
    {
        number: 46,
        category: "Dealing with Others",
        title: "Scratches Happen In Training",
        subtitle: "Minor Annoyances Are Practice",
        description: "View everyday inconveniences, mistakes, or annoying behavior as mere 'scratches' or training exercises (like sparring). This lowers the emotional stakes, making it easier to shake off minor blows with equanimity and move on.",
        action: "When annoyed by someone today, think: 'Just a scratch. Part of my training in patience and virtue.'",
        reflection: "What 'scratch' did I shake off easily today? Am I getting tougher?"
    },
    {
        number: 47,
        category: "Dealing with Others",
        title: "Don't Abandon Others nor Yourself",
        subtitle: "Stay True While Staying Kind",
        description: "Address the challenge of sticking to new, virtuous behaviors while maintaining relationships with those who don't change. You must not abandon your path of reason, nor abandon friends and family, but remain kind and patient with others' resistance.",
        action: "Be patient with someone who resists your growth or change. Stay your course with kindness, not judgment.",
        reflection: "How did I maintain my values while remaining compassionate? Did I need to choose between them?"
    },
    {
        number: 48,
        category: "Dealing with Others",
        title: "For Such a Small Price, Buy Tranquility",
        subtitle: "Choose Peace",
        description: "A strategy to combat irritation by consciously choosing tranquility over a reaction. When trifles arise, say internally: 'I buy tranquility instead,' avoiding the 'hassle' of emotional upset. Peace is worth the small price of letting things go.",
        action: "When irritated by something minor, say internally: 'I buy tranquility instead.' Let it go without reaction.",
        reflection: "What tranquility did I purchase by not reacting? Was the peace worth the price?"
    },
    {
        number: 49,
        category: "Dealing with Others",
        title: "Put Yourself in Other People's Shoes",
        subtitle: "Listen to Understand",
        description: "Listen carefully and try to understand the other person's perspective and reasons before passing judgment. This fosters compassion and prevents hasty labeling. Seek first to understand, then to be understood.",
        action: "In one conversation today, focus entirely on understanding their perspective, not on crafting your response.",
        reflection: "What did I understand about someone that I didn't know before? How did deep listening change the interaction?"
    },
    {
        number: 50,
        category: "Dealing with Others",
        title: "Choose Your Company Well",
        subtitle: "Companions Influence Character",
        description: "Spend time with people who are likely to improve you, as vices are contagious and companions pull you either 'down or up to their level'. Keep company only with those who 'uplift you, whose presence calls forth your best'.",
        action: "Evaluate your relationships. Who brings out your best self? Spend more intentional time with those people.",
        reflection: "How did my company today influence my character? Am I surrounding myself with the right people?"
    },
    {
        number: 51,
        category: "Dealing with Others",
        title: "Don't Judge But Yourself",
        subtitle: "Focus on Your Own Faults",
        description: "Refrain from hasty judgments of others, focusing instead on identifying and correcting your own faults. Philosophy is meant to 'scrape off your own faults, rather than be a way to rail against the faults of others'.",
        action: "Catch yourself judging someone today. Immediately redirect: 'What is my fault in this situation? What can I improve?'",
        reflection: "What did I learn about myself when I stopped judging others? Where is my work?"
    },
    {
        number: 52,
        category: "Dealing with Others",
        title: "Do Good, Not Only No Evil",
        subtitle: "Be a Force for Good",
        description: "Be a 'force for the good in the world' and actively intervene, even in small matters, rather than standing aside when injustice or rudeness occurs. Using reason to confront annoyances can correct the offender 'without useless anger'.",
        action: "Don't just avoid doing harm today. Actively do good when you see an opportunity. Intervene for justice with calm reason.",
        reflection: "Where did I intervene for good today? What changed because I acted instead of staying passive?"
    },
    {
        number: 53,
        category: "Dealing with Others",
        title: "Say Only What's Not Better Left Unsaid",
        subtitle: "Practice Meaningful Speech",
        description: "Promote silence as a goal, speaking only what is necessary, brief, and meaningful. Avoid gossip, comparison, and lengthy conversations about superficial matters. Words are precious - use them wisely.",
        action: "Before speaking today, ask: 'Is this necessary? Is this kind? Is this true? Is this better than silence?'",
        reflection: "What silence was more valuable than speech today? Did I speak less but say more?"
    },
    {
        number: 54,
        category: "Dealing with Others",
        title: "Listen with the Intent to Understand",
        subtitle: "Empathic Listening",
        description: "Pay close attention to what the speaker is trying to express (empathic listening) to foster understanding and connection. Listen not to respond, but to truly understand their meaning and experience.",
        action: "In conversations today, listen deeply without planning your response. Give the gift of your full attention.",
        reflection: "What did I hear when I truly listened with empathy? How did this change the quality of connection?"
    },
    {
        number: 55,
        category: "Dealing with Others",
        title: "Lead by Example",
        subtitle: "Be One, Don't Argue About It",
        description: "The final imperative: to 'be one' rather than argue about what a good person should be. Silently demonstrate principles through action, leading by example and demonstrating what you have learned, as others follow action more than instruction.",
        action: "Don't talk about virtue today. Don't explain your philosophy. Just demonstrate it through your actions. Be the example.",
        reflection: "How did my actions speak louder than my words today? Who might have noticed? Did I embody my values?"
    }
];

// Get a random practice
function getRandomPractice() {
    const randomIndex = Math.floor(Math.random() * stoicPractices.length);
    return stoicPractices[randomIndex];
}

// Get today's practice (same practice all day, rotates through all 55 over 55 days)
function getTodaysPractice() {
    const startDate = new Date('2024-12-05'); // Set your start date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of day
    startDate.setHours(0, 0, 0, 0);

    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const practiceIndex = daysDiff % 55;
    return stoicPractices[practiceIndex];
}

// Get related practices for a given practice number
function getRelatedPractices(practiceNumber) {
    const relatedIds = relatedPracticesMap[practiceNumber] || [];
    return relatedIds.map(id => stoicPractices[id - 1]).filter(p => p);
}

// Display related practices section
function displayRelatedPractices(currentPractice) {
    const container = document.getElementById('related-practices');

    // Safety check - if container doesn't exist, skip
    if (!container) {
        console.log('Related practices container not found');
        return;
    }

    const related = getRelatedPractices(currentPractice.number);

    if (related.length === 0) {
        container.innerHTML = '';
        return;
    }

    const html = `
        <div class="related-practices-container">
            <h3 class="f5 fw6 mb3">📚 Related Practices</h3>
            ${related.map(practice => `
                <a href="?p=${practice.number}" class="related-practice-link" data-practice="${practice.number}">
                    <div class="f6 fw6 mb1">Practice #${practice.number}: ${practice.title}</div>
                    <div class="f7 silver">${practice.subtitle}</div>
                </a>
            `).join('')}
        </div>
    `;

    container.innerHTML = html;

    // Add click handlers for related practice links
    container.querySelectorAll('.related-practice-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const practiceNum = parseInt(this.dataset.practice);
            const practice = stoicPractices[practiceNum - 1];
            if (practice) {
                displayPractice(practice);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

// Generate quote card HTML
function generateQuoteCard(practice) {
    return `
        <div class="quote-card" id="quote-card-display">
            <div class="quote-card-title">${practice.title}</div>
            ${practice.subtitle ? `<div class="quote-card-subtitle">"${practice.subtitle}"</div>` : ''}
            <div class="quote-card-action">${practice.action}</div>
            <div class="quote-card-footer">
                Practice #${practice.number} from The Little Book of Stoicism<br>
                brainfck.org/pages/stoic/?p=${practice.number}
            </div>
        </div>
    `;
}

// Get practice number from URL parameter or hash
function getPracticeFromURL() {
    // Check for query parameter: /stoic/?p=5
    const urlParams = new URLSearchParams(window.location.search);
    const practiceParam = urlParams.get('p');

    // Check for hash: /stoic/#5
    const hash = window.location.hash.replace('#', '');

    const practiceNumber = practiceParam || hash;

    if (practiceNumber) {
        const num = parseInt(practiceNumber);
        if (num >= 1 && num <= 55) {
            return stoicPractices[num - 1]; // Array is 0-indexed
        }
    }

    return null;
}

// Display practice in the DOM using Tachyons classes
function displayPractice(practice) {
    const container = document.getElementById('stoic-practice');
    
    const html = `
        <article class="practice-container pa4 mv4 br3 shadow-2 bl bw2">
            <div class="practice-category f6 fw6 ttu tracked mb2 silver">
                ${practice.category} • Practice ${practice.number}/55
            </div>
            <h2 class="practice-title f2 fw7 lh-title mb2">
                ${practice.title}
            </h2>
            ${practice.subtitle ? `
                <div class="practice-subtitle f4 i lh-copy mb3">
                    ${practice.subtitle}
                </div>
            ` : ''}
            <div class="practice-description f5 lh-copy mb4">
                ${practice.description}
            </div>
            
            <div class="practice-action pa3 br2 mt4 bl bw2">
                <div class="f5 fw6 mb2">💡 Today's Practice:</div>
                <div class="lh-copy">
                    ${practice.action}
                </div>
            </div>
            
            ${practice.reflection ? `
                <div class="practice-reflection pt3 mt4 bt b--moon-gray">
                    <div class="f5 fw6 mb2 gray">🌙 Evening Reflection:</div>
                    <div class="lh-copy i">
                        ${practice.reflection}
                    </div>
                </div>
            ` : ''}
        </article>
    `;
    
    container.innerHTML = html;

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?p=${practice.number}`;
    window.history.pushState({practiceNumber: practice.number}, '', newUrl);

    // Update practice counter
    const counter = document.querySelector('.practice-counter');
    if (counter) {
        counter.textContent = `Practice ${practice.number} of 55`;
    }

    // Display related practices
    console.log('Attempting to display related practices for practice', practice.number);
    displayRelatedPractices(practice);

    // Smooth scroll to top after loading new practice
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // First, check if there's a specific practice in the URL
    let practice = getPracticeFromURL();

    // If no URL parameter, use random (or getTodaysPractice)
    if (!practice) {
        practice = getRandomPractice();  // Random each visit
        // Or use: practice = getTodaysPractice();  // Same practice all day
    }

    displayPractice(practice);

    // Previous button
    const prevBtn = document.getElementById('prev-practice');
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            const current = getPracticeFromURL() || practice;
            const prevNum = current.number === 1 ? 55 : current.number - 1;
            displayPractice(stoicPractices[prevNum - 1]);
        });
    }

    // Next button
    const nextBtn = document.getElementById('next-practice');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const current = getPracticeFromURL() || practice;
            const nextNum = current.number === 55 ? 1 : current.number + 1;
            displayPractice(stoicPractices[nextNum - 1]);
        });
    }

    // Refresh button - gets a new random practice
    const refreshBtn = document.getElementById('refresh-practice');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            const newPractice = getRandomPractice();
            displayPractice(newPractice);
        });
    }

    // Quote card button
    const quoteBtn = document.getElementById('quote-card');
    if (quoteBtn) {
        quoteBtn.addEventListener('click', function() {
            const currentPractice = getPracticeFromURL() || practice;

            // Create modal overlay
            const modal = document.createElement('div');
            modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 2rem;';

            const modalContent = document.createElement('div');
            modalContent.style.cssText = 'max-width: 600px; width: 100%; position: relative;';
            modalContent.innerHTML = `
                ${generateQuoteCard(currentPractice)}
                <div style="text-align: center; margin-top: 1rem;">
                    <button id="download-card" class="button-stoic pointer dim" style="margin-right: 0.5rem;">📥 Download Image</button>
                    <button id="close-modal" class="button-stoic pointer dim">✕ Close</button>
                </div>
            `;

            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            // Close modal
            document.getElementById('close-modal').addEventListener('click', function() {
                document.body.removeChild(modal);
            });

            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });

            // Download as image functionality
            document.getElementById('download-card').addEventListener('click', async function() {
                const card = document.getElementById('quote-card-display');

                try {
                    // Use html2canvas if available, otherwise show instructions
                    if (typeof html2canvas !== 'undefined') {
                        const canvas = await html2canvas(card);
                        const link = document.createElement('a');
                        link.download = `stoic-practice-${currentPractice.number}.png`;
                        link.href = canvas.toDataURL();
                        link.click();
                    } else {
                        alert('To download as image:\n\n1. Right-click on the card\n2. Select "Save image as..." or take a screenshot\n\nOr install the html2canvas library for automatic downloads.');
                    }
                } catch (err) {
                    alert('To save this card:\n\n1. Take a screenshot of the card\n2. Or right-click and "Save image as..."');
                }
            });
        });
    }
    
    // Share button functionality
    const shareBtn = document.getElementById('share-practice');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            // Get current practice from URL or fallback to random
            const currentPractice = getPracticeFromURL() || getRandomPractice();
            const shareText = `Stoic Practice #${currentPractice.number}: ${currentPractice.title}\n\n${currentPractice.action}\n\n#Stoicism #DailyPractice`;
            // Create shareable URL with practice number
            const shareUrl = `${window.location.origin}${window.location.pathname}?p=${currentPractice.number}`;

            // Try native share API first (works on mobile)
            if (navigator.share) {
                navigator.share({
                    title: `Stoic Practice #${currentPractice.number}`,
                    text: shareText,
                    url: shareUrl
                }).catch(err => {
                    console.log('Share cancelled or failed:', err);
                });
            } else {
                // Fallback: copy to clipboard
                const fullText = shareText + '\n\n' + shareUrl;
                navigator.clipboard.writeText(fullText).then(() => {
                    // Visual feedback
                    const originalText = shareBtn.textContent;
                    shareBtn.textContent = '✓ Copied!';
                    shareBtn.style.background = '#27ae60';

                    setTimeout(() => {
                        shareBtn.textContent = originalText;
                        shareBtn.style.background = '';
                    }, 2000);
                }).catch(err => {
                    alert('Could not copy to clipboard. Please select and copy the text manually.');
                    console.error('Copy failed:', err);
                });
            }
        });
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.practiceNumber) {
            const practice = stoicPractices[event.state.practiceNumber - 1];
            if (practice) {
                // Re-display without updating URL again
                const container = document.getElementById('stoic-practice');
                const html = `
                    <article class="practice-container pa4 mv4 br3 shadow-2 bl bw2">
                        <div class="practice-category f6 fw6 ttu tracked mb2 silver">
                            ${practice.category} • Practice ${practice.number}/55
                        </div>
                        <h2 class="practice-title f2 fw7 lh-title mb2">
                            ${practice.title}
                        </h2>
                        ${practice.subtitle ? `
                            <div class="practice-subtitle f4 i lh-copy mb3">
                                ${practice.subtitle}
                            </div>
                        ` : ''}
                        <div class="practice-description f5 lh-copy mb4">
                            ${practice.description}
                        </div>

                        <div class="practice-action pa3 br2 mt4 bl bw2">
                            <div class="f5 fw6 mb2">💡 Today's Practice:</div>
                            <div class="lh-copy">
                                ${practice.action}
                            </div>
                        </div>

                        ${practice.reflection ? `
                            <div class="practice-reflection pt3 mt4 bt b--moon-gray">
                                <div class="f5 fw6 mb2 gray">🌙 Evening Reflection:</div>
                                <div class="lh-copy i">
                                    ${practice.reflection}
                                </div>
                            </div>
                        ` : ''}
                    </article>
                `;
                container.innerHTML = html;
            }
        }
    });
});
