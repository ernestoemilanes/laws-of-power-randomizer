const laws = [
  {
    number: "Law 1. Never Outshine the Master",
    law:
      "Always make those above you feel comfortably superior. Hide the extent of your own talents, as your masters may otherwise feel insecure. The better you make your master appear, the greater the level of power you will attain. Those above you want to feel secure and superior in their positions. This may involve making a few harmless mistakes so that you can ask your master for help. If, however, you are more naturally charming than your master, it would be best to avoid working for them entirely.",
  },
  {
    number:
      "Law 2. Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    law:
      "Friends are more likely to betray you in haste as they are more prone to envy. However, if you hire a former enemy, they will prove themselves more trustworthy, as they have more to prove. Consequently, you have more to fear from friends than your enemies. Often, you think you know your friends better than you do. This is because honesty rarely strengthens bonds, so friends frequently hide their true feelings about each other. As people want to feel they deserved their good fortune in hiring a friend, they can feel undeserving and, ultimately, resentful. Instead, it’s better to hire an enemy, as your motives are up front and are not clouded with personal feeling.",
  },
  {
    number: "Law 3. Conceal Your Intentions",
    law:
      "Always keep your intentions obscured. This way, your opponents cannot defend themselves. Lead them astray, and by the time they realize your plans, it will be too late. Use humankind’s tendency to trust appearances to your advantage. By dangling a decoy set of intentions in front of your opponents, they will fail to see what you’re really plotting. By cloaking your intentions, people will believe you to be friendly and honest. This will lead them further down the wrong path. Additionally, by being bland and inconspicuous, people are even less likely to doubt your intentions, as they trust the familiar.",
  },
  {
    number: "Law 4. Always Say Less Than Necessary",
    law:
      "Powerful people know how to impress others by saying less. The more you say, the more likely it is that you will end up saying something foolish. As people are constantly trying to work out what others appear to be thinking, silence makes them feel uncomfortable. By controlling what you reveal, you can wield great power. After all, they are likely to fill in the silences you leave, revealing more information about their own intentions and weaknesses.",
  },
  {
    number: "Law 5. So Much Depends on Reputation – Guard It With Your Life",
    law:
      "Your reputation is the cornerstone of your power. You can use it to intimidate and win, but if it becomes tarnished, you open yourself up to being vulnerable to attack. Make your reputation impenetrable, and predict attacks before they occur. Aid yourself in this endeavor by destroying your enemies by exploiting holes in their reputations and letting the public destroy them. A solid reputation can double your strength and distract potential opponents from discovering what you’re really like. It increases your presence and your strengths without having to expend much energy.",
  },
  {
    number: "Law 6. Court Attention at All Costs",
    law:
      "As everything is judged by appearance, you must stand out. Make yourself appear larger, more interesting, and more mysterious than the masses. One way to do this is to surround your name with sensation and scandal. Bear in mind that notoriety of any sort brings power. It’s preferable to be slandered than to be ignored. A solid counterbalance to this approach is to create an air of mystery around yourself. Keep your cards close to your chest. People are drawn to those who seem enigmatic. An air of mystery increases your presence and creates anticipation – everyone will be glued to your next move.",
  },
  {
    number:
      "Law 7. Get Others to Do the Work for You, but Always Take the Credit",
    law:
      "Never do for yourself what the efforts of others can do for you. Use their wisdom and knowledge to further your own cause. In doing so, you will appear intimidatingly efficient and knowledgeable. Ultimately, those who worked for you will be forgotten, and you will be remembered. If you think it’s important that you do all the work yourself, you won’t get far. Consequently, find those with the skills you lack, and find a way to either take their work as your own, or hire them and put your name on their efforts. However, to do this effectively, your position must be secure, as otherwise people will call you out for deception.",
  },
  {
    number: "Law 8. Make Other People Come to You – Use Bait if Necessary",
    law:
      "It’s always preferable to make your opponent come to you, as they will have to abandon their plans and strategies in the process. Lure them in, and then attack. This prevents you from ever reacting to your opponents; instead, they have to react to you. This means playing the long-game, sitting back, and staying calm as others get stuck in the traps you’ve carefully planned out for them. However, your traps are only as good as the perceived attractiveness of your bait. If your bait is sweet enough, your opponent will become blinded to reality by their emotions, allowing you to gain the upper hand.",
  },
  {
    number: "Law 9. Win Through Your Actions, Never Through Argument",
    law:
      "Any triumph you gain through argument will be short lived. Resentment will fester in your opponents instead of a genuine change of opinion. Instead, let your actions speak for you. If people agree with you through your actions instead of your words, you are more likely to sway lasting opinions. Words are a dime a dozen, and people will say anything to prove a point. Action is where you demonstrate your beliefs.",
  },
  {
    number: "Law 10. Infection: Avoid the Unhappy and the Unlucky",
    law:
      "Emotional states can be as infectious as diseases. Occasionally, some unfortunate individuals bring their own misfortune upon themselves and can bring you down too if you get too close. Therefore, make sure to associate with the happy and the fortunate. The incurably unhappy tend to portray themselves as victims, and before you realize they are the cause of their own misfortune, they have infected you with their misery. Who you decide to associate with is critical. Through associating with the miserable, you waste your valuable time and drain your potential power.",
  },
  {
    number: "Law 11. Learn to Keep People Dependent on You",
    law:
      "To maintain independence, you must make others need and want you. The more people rely on you, the more freedom you have. Yet, be wary to never teach those surrounding you with enough information that they can start doing things for themselves. This method is the best way to get people to do what you want without forcing them or inflicting pain on them. Once you have dependents, they are reliant on you, and you can subtly do with them as you wish.",
  },
  {
    number:
      "Law 12. Use Selective Honesty and Generosity to Disarm Your Victim",
    law:
      "Learning to give before you take is a skilled way of getting what you want. Selective honesty also functions as a means to disarm your opponents. However, regaling a single truth will not be enough. You’ll have to construct a facade of honesty built upon a series of acts to gain trust, but these acts can be quite inconsequential. Learning to give before you take is a skilled way of getting what you want. Selective honesty also functions as a means to disarm your opponents. However, regaling a single truth will not be enough. You’ll have to construct a facade of honesty built upon a series of acts to gain trust, but these acts can be quite inconsequential.",
  },
  {
    number:
      "Law 13. When Asking for Help, Appeal to the Self-interests of Others, Never to Their Mercy or Gratitude",
    law:
      "If you must ask for help, make sure your request includes a benefit for your ally that you can exaggerate beyond proportion. When your ally sees that there is something in it for them, they are more likely to respond with enthusiasm. Self-interest is the greatest motivator for people. Once you master the art of working out what others want and using it to further your own plans, there will be no limits on what you can accomplish.",
  },
  {
    number: "Law 14. Pose as a Friend, Work as a Spy",
    law:
      "Knowledge about your rival is essential. By posing as a friend, you can ask indirect questions and gradually get your opponents to reveal their weaknesses and their intentions. Once you know this information, you can better predict how they are going to move next. If you don’t want to pose as a friend, get others to spy for you. However, while you gather information, you open yourself up to vulnerabilities by letting other people do your work for you. It’s always better to spy and pose as a friend yourself.",
  },
  {
    number: "Law 15. Crush Your Enemy Totally",
    law:
      "To crush your enemy partially means that they will eventually recover and seek revenge. Ultimately, you can only gain peace and serenity if your enemies cease to exist. If you manage to remove all of your opponent’s options, then they will have no choice but to bend to your will. By giving them nothing to negotiate with and no room to maneuver, you will have crushed them.",
  },
  {
    number: "Law 16. Use Absence to Increase Respect and Honor",
    law:
      "The more present you are, the more common you appear. Create an air of scarcity around yourself to increase your perceived value. If you currently exist within an established group, intermittently withdraw so that others talk about you and admire you more. To do this effectively, you must learn when is the right time to withdraw. In doing so, you force their respect by inadvertently threatening your absence for good. Once you return from your absence, it will appear as if you have been resurrected, and people will be relieved to see you again.",
  },
  {
    number:
      "Law 17. Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
    law:
      "Humans are creatures of habit who look for familiar patterns in the behaviors of others. By acting unpredictably, your opponents will tire themselves out by trying to predict and analyze your moves. This means occasionally striking without warning. When you act predictably, you give others power over you. If you act surprisingly, they will feel that they don’t understand you and will be intimidated. Similarly, if you find yourself the underdog, using a strategy of unpredictable moves can confuse your enemies into making a tactical blunder.",
  },
  {
    number:
      "Law 18. Do Not Build Fortresses to Protect Yourself – Isolation is Dangerous",
    law:
      "If you decide to isolate yourself from your enemies and the world at large, you cut yourself off from valuable information. This makes you vulnerable to attack. It’s always better to mingle amongst people, as you are better protected in a crowd. Because humans are social creatures, power comes with social interaction. Therefore, to become powerful, you must place yourself at the center of things. Activity should revolve around you. Resist the urge to retreat when things feel uncertain. Instead of turning inward, focus on seeking out old allies and forcing yourself into new social circles.",
  },
  {
    number:
      "Law 19. Know Who You’re Dealing With – Don’t Offend the Wrong Person",
    law:
      "Choose your opponents wisely. There are some people that once defeated, will spend the rest of their lives seeking revenge. Consequently, it pays to not offend the wrong person. The skill of correctly measuring people is the most important with regard to getting and maintaining power. Be sure to know everything about a person before you work with them. However, don’t rely on your instincts to get an understanding of a person, and never trust appearances. Watch your target over a long period of time to get a truer picture of their nature.",
  },
  {
    number: "Law 20. Don’t Commit to Anyone",
    law:
      "Make sure the only cause you commit to is yourself. Maintain your independence at all costs. This allows you to play people off against each other. When you hold back from joining a cause, you create a sense of respect because you appear untouchable. You gain a reputation for independence. Further, do not commit to anyone. Stay out of petty fights and squabbles. Feign interest, but let others do the fighting while you watch and wait. Often, it can be a good tactic to stir up quarrels between two parties and then gain power by acting as the go-between.",
  },
  {
    number:
      "Law 21. Play a Sucker to Catch a Sucker – Appear Dumber Than Your Mark",
    law:
      "No one enjoys feeling stupid. Consequently, a great trick is to make your opponents feel smarter than you. Once they believe themselves to be more intelligent, they will never suspect that you have any ulterior motives.",
  },
  {
    number: "Law 22. Use the Surrender Tactic: Transform Weakness Into Power",
    law:
      "Surrender before you are about to be defeated. This buys you more time to plot your revenge, and to torment your conqueror. By surrendering, you deny them the satisfaction of destroying you. In doing so, you make the act of surrender a tool of power. By yielding, you gain the upper hand because you lull your opponent into believing they have defeated you, even as you plot their downfall. This confuses your opponents and means they are unlikely to act aggressively against you.",
  },
  {
    number: "Law 23. Concentrate Your Forces",
    law:
      "Conserve your energies by focusing them all into a single source of power. When looking for such a source, identify a single spring that will sustain you for a long time to come. You gain more power by finding a singular rich source than by flitting between many more shallow sources of power. Power exists in concentrated form. In any organization, power will emanate from a small group of people who are holding all the strings. Consequently, power is like oil, you only need to strike it once to assure yourself a lifetime of wealth and power.",
  },
  {
    number: "Law 24. Play the Perfect Courtier",
    law:
      "It had long since come to my attention that people of accomplishments rarely sat back and let things happen to them. They went out and happened to things. 1–Adapting your style and language according to your audience. 2–Avoiding being the bearer of bad news. 3–Never criticizing your superiors. 4–Being self-observant. 5–Mastering your emotions. 6–Being a source of pleasure.",
  },
  {
    number: "Law 25. Recreate Yourself",
    law:
      "Do not accept the role that society has given you. Forge your own identity, one that commands attention. Master your image rather than letting others dictate it for you. Remake yourself into a figure of power as if molding yourself from clay. To do this, you must first be self-aware, and you must learn to master your emotions. Then, you must create a memorable character. From here, you can learn to play many roles to adapt to what any given situation requires of you. However, remember that overacting can be counterproductive.",
  },
  {
    number: "Law 26. Keep Your Hands Clean",
    law:
      "You must maintain a spotless appearance. You should never be associated with nasty deeds. To do this, employ the use of scapegoats to disguise your involvement. Your reputation depends more on what you conceal than what you reveal. You should always have a convenient scapegoat on hand for when needing to conceal your more dubious activities. In addition to a scapegoat, you will also need a cat’s-paw. This is someone who does your dirty work for you while obscuring your involvement. This means letting someone else be the bearer of bad news while you choose to associate yourself exclusively with the good.",
  },
  {
    number:
      "Law 27. Create a Cult-like Following by Playing on People’s Need to Believe",
    law:
      "People want to believe in something. By inventing yourself as this cult-like entity, they will follow you and give you untold amounts of power. To become such a figure, you need to follow these steps: 1–Keep your words vague and simple but full of promise. 2–Emphasize enthusiasm rather than the intellectual and the rational. 3–Structure your group in accordance to the forms of organized religion. 4–Disguise your sources of income. 5–Create an us-versus-them dynamic",
  },
  {
    number: "Law 28. Enter Action With Boldness",
    law:
      "Everyone admires the bold. The timid are frowned upon. Consequently, you shouldn’t choose a course of action half-heartedly. Your doubts will become apparent and will tarnish your reputation. It’s always better to act boldly. Any mistakes made are easily compensated by acting even more audaciously. Few are born bold. It’s a habit that needs to be cultivated. It must be practiced. Likewise, timidity is also a learned trait. If you find yourself acting timidly, you must root this out and replace it with acts of boldness instead.",
  },
  {
    number: "Law 29. Plan All the Way to the End",
    law:
      "Always plan until the end. This means thinking through every possibility that could prevent you from reaching your end goal. Thus, you will be able to accommodate for any surprises along the way and secure your future. Most people are too trapped by their emotions in the moment to see ahead, so this will give you the upper hand. Plan in detail before you act, and don’t succumb to making any vague plans. Your end goal must always be crystal clear.",
  },
  {
    number: "Law 30. Make Your Accomplishments Seem Effortless",
    law:
      "Make your success seem easy. Conceal all the toil and tricks you used to attain it, as it otherwise arouses too much curiosity in others. Never reveal how you reached your position of power to anyone, or they may use it against you. There are great advantages to remaining silent. The more mysterious your actions appear, the greater your power appears to be. It will make it seem as if you have an exclusive gift that no one can replicate and that knows no limits.",
  },
  {
    number:
      "Law 31. Control the Options: Get Others to Play With the Cards You Deal",
    law:
      "By giving your opponents a choice, they will feel that they’re controlling their destiny. What they won’t realize is that you’re using them as a puppet to choose between two scenarios, both of which serve you. When given a choice between two possibilities, people rarely consider all the other potential options that could be on the table. Instead, they blindly choose to believe they have autonomy in their decision-making; too much freedom creates anxiety. By setting up a narrow range of choices, you can guide your opponent to play right into your hands.",
  },
  {
    number: "Law 32. Play Into People’s Fantasies",
    law:
      "As the truth is often ugly, if you appeal to it, you risk being bombarded with the anger of disenchantment. Instead, by tapping into the fantasies of the masses, people will flock to you as you offer an alternative to the disillusionment of reality. By observing which aspects of everyday life are most abhorred, you can conjure up fantasies that promise the opposite of peoples’ current realities and thus wield a phenomenal power.",
  },
  {
    number: "Law 33. Discover Each Man’s Thumbscrew",
    law:
      "Find your opponent’s weakness. This is often an insecurity, an untamed emotion or desire, or sometimes a secret pleasure. To do so, look for the following: 1–Instances when they behave like a child, which indicates some unresolved trauma in childhood. 2–Contrasts, as an overt trait often conceals it opposite (i.e., arrogance is often hiding insecurity). 3–The weak link, which is often someone behind the scenes controlling their behavior. 4–Ways to fill the void of their insecurity or unhappiness to wield significant power. 5–How to encourage their uncontrollable emotion, as they won’t be able to control themselves, and you can do the controlling for them.",
  },
  {
    number:
      "Law 34. Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One",
    law:
      "How you present yourself to the world will reflect how others see and treat you. Carry yourself with self respect, confidence, and dignity to make it seem like you were destined for power. We must make ourselves demand and expect as much as a young child. Believe you are destined for greatness, and this belief will radiate outwards and others will believe it, too. Ask for less, and that is exactly what you’ll get.",
  },
  {
    number: "Law 35. Master the Art of Timing",
    law:
      "Never seem to be in a rush – patience is a virtue. Learn to bide your time, and only strike when the timing is right. As time is a perception, by mastering your emotions, you can make time seem to move more slowly and lengthen your perception of the future. This allows you to become more patient and to see the bigger picture.",
  },
  {
    number:
      "Law 36. Disdain Things You Cannot Have: Ignoring Them is the Best Revenge",
    law:
      "The less interest you take in things that irritate you, the more superior you seem. By acknowledging your enemy, you give their existence credibility and, therefore, power. Paradoxically, the more you want something, the more it eludes you as your interest is too strong, which makes others feel uncomfortable and fearful. Occasionally, it’s best just to leave things alone. By turning your back on what you want, you will drive your opponents crazy.",
  },
  {
    number: "Law 37. Create Compelling Spectacles",
    law:
      "By generating grand, spectacular gestures, you will heighten your presence and your power. People will be too dazzled by appearances to uncover what you’re really up to. As opposed to using words, visual gestures contain an emotive power and immediacy that leave no room for doubt. Where words divide, images unite. Use this to your advantage.",
  },
  {
    number: "Law 38. Think as You Like, but Behave Like Others",
    law:
      "By consistently going against the grain in public, people will begin to resent you for making them feel inferior. Practice blending in and hiding your true feelings to nurture the common touch. By doing so, you will be left alone to express your true beliefs in a targeted manner. Once a base of power is established, you can then begin to disseminate your beliefs gradually, and they are more likely to be adopted.",
  },
  {
    number: "Law 39. Stir Up Waters to Catch Fish",
    law:
      "If you can stay calm while infuriating your opponents, you can gain an advantage. By finding their weaknesses, you can disturb them and play with them at will. The more angry they become, the more ridiculous they will appear. This will reduce their power.",
  },
  {
    number: "Law 40. Despise the Free Lunch",
    law:
      "Never trust anything that comes for free. Anything of worth is worth paying for. Most things that come for free come with a burdensome psychological price task. By paying, you avoid falling into the trap of having to be grateful, guilty, or deceitful. Further, being lavish with your money is a sign of power. Generosity softens up your opponents into being deceived.",
  },
  {
    number: "Law 41. Avoid Stepping Into a Great Man’s Shoes",
    law:
      "What came first always seems more original than what follows. Don’t get lost in the shadows of those that came before you. You must establish your own name and identity by not following the same course of your predecessors.",
  },
  {
    number: "Law 42. Strike the Shepherd, and the Sheep Will Scatter",
    law:
      "All trouble can usually be traced back to one individual. By rooting out this individual and preventing them from operating, you will stop their influence. Don’t waste time, or their influence will multiply. In every group, power is concentrated around one or two people. Consequently, understanding who controls the group is critical. This is made more challenging, as troublemakers prefer to disguise their actions. Isolate their power, however, and they become redundant.",
  },
  {
    number: "Law 43. Work on the Hearts and Minds of Others",
    law:
      "If people feel coerced into acting in a specific way, they will resent you. Instead, you must seduce others so that they act how you want without you having to ask them. By understanding their psychology and their weaknesses, you can play with their emotions and conquer their hearts and minds so that they are loyal to you. By softening them up, you can slowly bend people towards your will without them realizing.",
  },
  {
    number: "Law 44. Disarm and Infuriate With the Mirror Effect",
    law:
      "By mirroring your opponents and doing exactly as they do, you humiliate them and cause them to overreact. By making them believe you share their values, they find it challenging to work out your strategy, as they are blinded by your mirror. You are also able to teach your opponents a lesson by giving them a taste of their own medicine.",
  },
  {
    number:
      "Law 45. Preach the Need for Change, but Never Reform Too Much at Once",
    law:
      "If you have recently entered a position of power or are an outsider trying to make a claim for it, respect the way people have been living up until this point. Too much change will engender a revolt. To introduce change, make it seem like a gradual and gentle improvement on the past.",
  },
  {
    number: "Law 46. Never Appear Too Perfect",
    law:
      "While appearing superior to others is dangerous, to appear faultless and without weakness is even more perilous. By displaying harmless vices, you prevent envy from developing, and you make yourself appear more approachable. By letting envy fester, it can manifest in a host of problematic ways that will ultimately try to rob you of your power. Stop it in its tracks by making yourself seem powerful but not faultless.",
  },
  {
    number:
      "Law 47. Don’t Go Past the Mark You Aimed For: In Victory, Learn When to Stop",
    law:
      "Don’t let success go to your head. The moment you achieve victory is often when you’re at your most vulnerable. Don’t get ahead of yourself with your overconfidence and push beyond your initial target. This could create more enemies than you are capable of defeating. There can be no substitute for meticulous strategic planning. Once you reach your goal, stop.",
  },
  {
    number: "Law 48. Assume Formlessness",
    law:
      "By being tangible, you open yourself up to attack. To be malleable, adaptable, and on the move makes you ungraspable. Accept that everything, everywhere changes, and embody this truth. By being as fluid as water, you protect yourself from the ever-shifting nature of reality. By refusing to adapt and to change, you fail to evolve and your power will be usurped. The powerful are constantly adapting, and their power comes from the speed at which they can change.",
  },
];

const lawBtn = document.querySelector("#lawBtn");
const lawNumber = document.querySelector("#lawNumber");
const law = document.querySelector("#law");

lawBtn.addEventListener("click", displayLaw);

function displayLaw() {
  let i = Math.floor(Math.random() * laws.length);
  lawNumber.innerHTML = laws[i].number;
  law.innerHTML = laws[i].law;
}
