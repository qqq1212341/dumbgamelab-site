"use strict";
/* 화면 말 — 한국어·영어. 언어 = 저장값(dgl.lang, 포털 빌드가 영어로 심는다) → 기기 언어. 이모지 금지. */
const LANG = (() => {
  const q = /[?&]lang=(\w+)/.exec(location.search); if (q) return q[1].startsWith("ko") ? "ko" : "en";
  try { const v = localStorage.getItem("dgl.lang"); if (v) return v.startsWith("ko") ? "ko" : "en"; } catch (e) {}
  return /^ko/i.test(navigator.language || "") ? "ko" : "en";
})();
const STR = {
  ko: {
    title: "치치의<br>브레인롯 털이", start: "시작", reset: "새 게임", resetAsk: "세이브를 지울까요?",
    stats: "모은 생물 {n}마리 · 도감 {d}/{t}", perSec: "+{v} / 초", base: "치치네 기지",
    noCash: "돈이 모자라요", noSlot: "자리가 없어요", free: "공짜",
    rarity_common: "일반", rarity_rare: "희귀", rarity_epic: "에픽", rarity_legendary: "전설", rarity_mythic: "신화", rarity_god: "갓", rarity_celestial: "천상",
    conguin: "라바콘 펭귄", cactubeat: "헤드폰 선인장", toastcat: "토스터 고양이", ricefrog: "밥솥 개구리", bunshark: "크림빵 상어",
    pancraffe: "팬케이크 기린", sodaster: "콜라캔 햄스터", milkcow: "우유팩 젖소", sneasnail: "운동화 달팽이", umbrelladuck: "우산 오리",
    teapothog: "찻주전자 고슴도치", pizzapigeon: "피자 비둘기", alarmowl: "알람시계 부엉이", pickleseal: "피클 잠수함 물범", melonturtle: "수박 거북",
    lightbulbfly: "전구 반딧불", croissantdragon: "크루아상 로켓 용", donutdolphin: "도넛 돌고래", cosmiccat: "은하수 고양이", icetruckphant: "아이스크림 트럭 코끼리",
    luckybox: "럭키 박스", backpackbear: "책가방 곰", lavajelly: "용암등 해파리", mailpelican: "우체통 펠리컨", washwhale: "세탁기 고래",
    radiorabbit: "라디오 토끼", cloudsheep: "구름 양", chestcrab: "보물상자 게", pianopeacock: "피아노 공작", discochameleon: "미러볼 카멜레온",
    vendpanda: "자판기 판다", noodlepus: "국수 문어왕",
    raidBtn: "털러 가기", raidLocked: "{n}마리 더 사면 열림", raidWait: "{s}초",
    raidTitle: "어느 기지를 털까?", diff0: "쉬움", diff1: "보통", diff2: "어려움", go: "털기", close: "닫기",
    raidNoSlot: "기지에 빈 칸이 없어요",
    holdToMove: "누르고 있으면 걷는다", holdToGrab: "꾹 눌러 집어!", carryBack: "들고 돌아가!", chant: "무궁화 꽃이 피었습니다", look: "멈춰!",
    caught: "들켰다!", got: "{name} 훔쳤다!", retryAd: "광고 보고 다시", back: "기지로", saved: "맞바꾸기로 모면!", decoy: "미끼가 시선을 끈다", ghost: "투명!",
    thiefCome: "도둑이다! 때려!", thiefGone: "쫓아냈다! +{v}", thiefStole: "{name}을(를) 훔쳐 갔다!", armed: "{name} 장전",
    sell: "팔기 +{v}", holdSell: "꾹 눌러 팔기 +{v}", income: "초당 +{v}", hold: "꾹",
    away: "자리 비운 동안", claim: "받기", claim2: "광고 보고 2배",
    sound: "소리", on: "켬", off: "끔",
    /* 하단 메뉴 */
    mShop: "상점", mRebirth: "환생", mFuse: "합성", mBook: "도감", mLock: "잠금", mCollect: "모두 거두기",
    locked: "잠김 {s}초", lockedMsg: "기지 잠김!", unlockedMsg: "잠금 풀림", lockOn: "기지를 잠근다 ({s}초)", lockNo: "이미 잠겨 있어요",
    /* 칸 */
    slotLocked: "잠김", slotUnlockAd: "광고 보고 열기", slotUnlockCash: "{v} 로 열기", slotUnlocked: "새 칸이 열렸다!",
    boxWait: "{s}초", boxOpen: "열기!", boxOpened: "{name} 나왔다!",
    /* 환생 */
    rbTitle: "환생 {n}단계", rbNeed: "필요한 생물", rbReward: "보상", rbDo: "환생!", rbNeedMore: "생물 부족", rbNeedCash: "돈 부족",
    rbDone: "환생 완료! 새 보상이 열렸다", rbAll: "모든 환생을 끝냈어요", rbSkipAd: "광고 보고 건너뛰기", rbMult: "수익 x{v}", rbCool: "잠금 {s}초", rbItem: "{name}",
    rbCash: "돈 {v}", rbMoney: "필요 금액",
    /* 합성 */
    fuTitle: "합성기", fuDo: "합성!", fuNeed: "재료가 모자라요", fuDone: "{name} 합성 성공!", fuHave: "{a}/{b}", fuNoRoom: "빈 칸이 없어요",
    /* 도감 */
    bkTitle: "도감", bkDone: "완성!", bkWing: "날개 {n}쌍", bkReward: "완성 보상: 날개", bkNew: "새 생물!",
    /* 상점 */
    shTitle: "아이템 상점", shRestock: "입고까지 {t}", shStock: "재고 {n}", shBuy: "{v}", shOwned: "가진 것", shLevel: "환생 {n}단계 필요", shNone: "품절",
    shRestockAd: "광고 보고 입고", shBought: "{name} 구매!", shMax: "가방이 꽉 찼어요",
    item_15: "후려치기 막대", item_16: "가시 막대", item_10: "벌 총", item_14: "풍선 막대", item_18: "사탕 막대", item_17: "무지개 사탕",
    item_11: "개미 총", item_12: "얼음 총", item_13: "포털 총", item_21: "닻 총", item_20: "갈고리 총", item_19: "기지 리모컨",
    item_22: "TNT", item_23: "복제 튜브", item_25: "투명 물약", item_24: "맞바꾸기 총",
    id_15: "세게 후려쳐 도둑을 멀리 보낸다", id_16: "도둑이 어지러워 느려진다", id_10: "도둑이 5초 헷갈린다", id_14: "도둑을 하늘로 날린다",
    id_18: "도둑이 눈이 부셔 느려진다", id_17: "도둑을 아무 데로나 보낸다", id_11: "도둑이 작아져 느려진다", id_12: "도둑을 5초 얼린다",
    id_13: "훔친 걸 들고 순간이동으로 귀환", id_21: "도둑을 4초 붙잡는다", id_20: "도둑을 끌어당겨 잡는다", id_19: "어디서든 기지를 잠근다",
    id_22: "도둑을 한 방에 날린다", id_23: "잠입 중 5초 미끼를 둔다", id_25: "잠입 중 15초 투명해진다", id_24: "들켰을 때 한 번 모면한다",
    uses: "{n}회",
    /* 이벤트 */
    evToto: "배달 손님: 알람 부엉이", evDragon: "용 손님이 왔다!", evIn: "{name} {t} 뒤", evNow: "{name} 지금!", evFree: "이벤트 손님 — 공짜",
    evName_toto: "알람 부엉이 이벤트", evName_dragon: "용 이벤트",
    /* 멀티 · 스킨 · 핼러윈 */
    rarity_spooky: "으스스", pumpcat: "호박등 고양이", sheetghost: "이불 유령",
    raidSearching: "털 만한 기지를 찾는 중...", raidReal: "진짜 기지", raidPractice: "연습 기지", raidPower: "초당 +{v}", raidCount: "생물 {n}마리", raidOwner: "{nick}의 기지",
    bvTitle: "{nick}의 기지", bvLocked: "잠겨 있어요 · {s}초 뒤에 풀려요", bvShield: "방금 털린 기지예요. 잠깐 뒤에 다시 와요", bvPick: "훔칠 생물을 눌러요", bvBox: "상자", bvEmpty: "빈 칸", bvOther: "다른 기지",
    stealChecking: "훔치는 중...", stealBack: "{nick}에게는 {m}분 뒤에 돌아가요", stealLocked: "그새 기지가 잠겼어요!", stealShield: "방금 다른 도둑이 털었어요", stealCool: "이 기지는 잠깐 쉬어야 해요", stealEmpty: "누가 먼저 가져갔어요", stealLimit: "오늘은 많이 털었어요. 내일 또 와요", stealNet: "서버에 닿지 않았어요. 잠깐 뒤에 다시", stealGone: "그 기지는 이제 없어요",
    theftTitle: "털렸다!", theftLine: "{nick} 님이 {name}을(를) 훔쳐 갔어요", comesBack: "{m}분 뒤에 돌아와요", backDone: "이미 돌아왔어요", backHome: "생물이 돌아왔어요!", revenge: "복수하러 가기", gotIt: "확인",
    meTitle: "내 기지", nickLabel: "닉네임", nickSave: "저장", nickHint: "2~12자 · 이모지와 링크는 안 돼요", nickBad: "쓸 수 없는 이름이에요", netOn: "서버 연결됨 · 남들이 내 기지를 털 수 있어요", netOff: "오프라인 · 연습 기지로 놀아요", robbed: "털린 횟수 {n}", stoleCount: "훔친 횟수 {n}", logTitle: "최근에 털린 일", logNone: "아직 없어요", ago: "{m}분 전", agoH: "{h}시간 전",
    skTitle: "꾸미기", skBase: "기지 바닥", skCr: "생물 소품", skUse: "쓰기", skUsing: "쓰는 중", skBuy: "{v}로 열기", skAd: "광고 보고 열기", skNone: "없음", skNew: "새 스킨이 열렸어요!",
    skReq_rebirth: "환생 {n}단계", skReq_book: "도감 {n}쪽 완성", skReq_event: "핼러윈 이벤트로 열려요", skReq_over: "이벤트가 끝났어요",
    sk_wood: "나무 바닥", sk_cloud: "구름 바닥", sk_candy: "사탕 바닥", sk_gold: "황금 바닥", sk_space: "우주 바닥", sk_haunt: "유령의 집 바닥",
    cr_: "없음", cr_bow: "리본", cr_shades: "선글라스", cr_party: "고깔모자", cr_crown: "왕관", cr_halo: "천사 링", cr_witch: "마녀 모자",
    hwBoxName: "호박 상자", hwBoxGuest: "호박 상자 손님이 왔어요!", hwCandyGuest: "사탕 통이 지나가요!", hwTapMe: "눌러!", hwLine: "핼러윈 이벤트 · {d}일 남음 · 상자 {n}번 더", hwTitle: "핼러윈 이벤트 중!",
    boxSkipTitle: "상자 바로 열기", boxSkipAsk: "열리기까지 {s}초", boxSkipAd: "광고 보고 바로 열기",
    /* 튜토리얼 */
    tut1: "공짜 손님을 눌러 데려와!", tut2: "칸 위 돈을 눌러 거둬!", tut3: "돈이 쌓이면 더 비싼 생물을 사자", tut4: "환생 단계가 열렸다",
  },
  en: {
    title: "Brainrot<br>Heist", start: "Start Heist", reset: "New game", resetAsk: "Delete your save?",
    stats: "{n} creatures · Index {d}/{t}", perSec: "+{v} / sec", base: "Chichi's Base",
    noCash: "Not enough cash", noSlot: "Base is full", free: "Free",
    rarity_common: "Common", rarity_rare: "Rare", rarity_epic: "Epic", rarity_legendary: "Legendary", rarity_mythic: "Mythic", rarity_god: "God", rarity_celestial: "Celestial",
    conguin: "Cone Penguin", cactubeat: "Beatbox Cactus", toastcat: "Toaster Cat", ricefrog: "Rice Cooker Frog", bunshark: "Cream Bun Shark",
    pancraffe: "Pancake Giraffe", sodaster: "Soda Tank Hamster", milkcow: "Milk Carton Cow", sneasnail: "Sneaker Snail", umbrelladuck: "Umbrella Duck",
    teapothog: "Teapot Hedgehog", pizzapigeon: "Pizza Pigeon", alarmowl: "Alarm Clock Owl", pickleseal: "Pickle Sub Seal", melonturtle: "Melon Turtle",
    lightbulbfly: "Bulb Firefly", croissantdragon: "Croissant Rocket Dragon", donutdolphin: "Donut Dolphin", cosmiccat: "Galaxy Cat", icetruckphant: "Ice Cream Truck Elephant",
    luckybox: "Lucky Box", backpackbear: "Backpack Bear", lavajelly: "Lava Lamp Jelly", mailpelican: "Mailbox Pelican", washwhale: "Washer Whale",
    radiorabbit: "Radio Rabbit", cloudsheep: "Cloud Sheep", chestcrab: "Chest Crab", pianopeacock: "Piano Peacock", discochameleon: "Disco Chameleon",
    vendpanda: "Vending Panda", noodlepus: "Noodle Octo King",
    raidBtn: "Steal", raidLocked: "Buy {n} more", raidWait: "{s}s",
    raidTitle: "Which base to rob?", diff0: "Easy", diff1: "Normal", diff2: "Hard", go: "Steal", close: "Close",
    raidNoSlot: "No free spot in your base",
    holdToMove: "Hold to sneak", holdToGrab: "Hold to grab!", carryBack: "Run it home!", chant: "Green light...", look: "RED LIGHT!",
    caught: "Busted!", got: "Stole {name}!", retryAd: "Watch ad to retry", back: "Back to base", saved: "Swapped out of it!", decoy: "Decoy has their eyes", ghost: "Invisible!",
    thiefCome: "Thief! Whack it!", thiefGone: "Chased off! +{v}", thiefStole: "Thief took {name}!", armed: "{name} ready",
    sell: "Sell +{v}", holdSell: "Hold to sell +{v}", income: "+{v} / sec", hold: "Hold",
    away: "While you were away", claim: "Collect", claim2: "Watch ad: x2",
    sound: "Sound", on: "On", off: "Off",
    mShop: "Shop", mRebirth: "Rebirth", mFuse: "Fuse", mBook: "Index", mLock: "Lock", mCollect: "Collect",
    locked: "Lock {s}s", lockedMsg: "Base locked!", unlockedMsg: "Lock is off", lockOn: "Lock your base ({s}s)", lockNo: "Already locked",
    slotLocked: "Locked", slotUnlockAd: "Watch ad to open", slotUnlockCash: "Open for {v}", slotUnlocked: "New spot unlocked!",
    boxWait: "{s}s", boxOpen: "Open!", boxOpened: "Got {name}!",
    rbTitle: "Rebirth {n}", rbNeed: "Creatures needed", rbReward: "Rewards", rbDo: "Rebirth!", rbNeedMore: "Need more", rbNeedCash: "Not enough cash",
    rbDone: "Rebirth done! New rewards", rbAll: "You finished every rebirth", rbSkipAd: "Watch ad to skip", rbMult: "Income x{v}", rbCool: "Lock {s}s", rbItem: "{name}",
    rbCash: "Cash {v}", rbMoney: "Cash needed",
    fuTitle: "Fusion machine", fuDo: "Fuse!", fuNeed: "Missing parts", fuDone: "Fused {name}!", fuHave: "{a}/{b}", fuNoRoom: "No free spot",
    bkTitle: "Index", bkDone: "Done!", bkWing: "{n} pair of wings", bkReward: "Page reward: wings", bkNew: "New creature!",
    shTitle: "Item shop", shRestock: "Restock in {t}", shStock: "Stock {n}", shBuy: "{v}", shOwned: "Owned", shLevel: "Needs rebirth {n}", shNone: "Sold out",
    shRestockAd: "Watch ad to restock", shBought: "Bought {name}!", shMax: "Bag is full",
    item_15: "Slap Stick", item_16: "Spiked Stick", item_10: "Bee Gun", item_14: "Balloon Stick", item_18: "Candy Stick", item_17: "Rainbow Candy",
    item_11: "Ant Gun", item_12: "Freeze Gun", item_13: "Portal Gun", item_21: "Anchor Gun", item_20: "Hook Gun", item_19: "Base Remote",
    item_22: "TNT", item_23: "Clone Tube", item_25: "Invisibility Potion", item_24: "Swap Gun",
    id_15: "Slaps a thief far away", id_16: "Dizzies the thief so it slows down", id_10: "Confuses the thief for 5s", id_14: "Launches the thief into the sky",
    id_18: "Blinds the thief so it slows down", id_17: "Sends the thief somewhere random", id_11: "Shrinks the thief so it slows down", id_12: "Freezes the thief for 5s",
    id_13: "Teleport home while carrying loot", id_21: "Pins the thief for 4s", id_20: "Hooks the thief and drags it in", id_19: "Lock your base from anywhere",
    id_22: "Blows the thief away", id_23: "Drops a 5s decoy on a heist", id_25: "Invisible for 15s on a heist", id_24: "Escape one catch on a heist",
    uses: "{n} uses",
    evToto: "Delivery guest: Alarm Clock Owl", evDragon: "A dragon guest arrived!", evIn: "{name} in {t}", evNow: "{name} now!", evFree: "Event guest — free",
    evName_toto: "Owl event", evName_dragon: "Dragon event",
    /* multiplayer · skins · halloween */
    rarity_spooky: "Spooky", pumpcat: "Pumpkin Lantern Cat", sheetghost: "Bedsheet Ghost",
    raidSearching: "Looking for bases to rob...", raidReal: "Real base", raidPractice: "Practice base", raidPower: "+{v} / sec", raidCount: "{n} creatures", raidOwner: "{nick}'s base",
    bvTitle: "{nick}'s base", bvLocked: "Locked - opens in {s}s", bvShield: "Just robbed. Come back in a bit", bvPick: "Tap a creature to steal", bvBox: "Box", bvEmpty: "Empty", bvOther: "Other bases",
    stealChecking: "Stealing...", stealBack: "It goes back to {nick} in {m} min", stealLocked: "They locked the base just now!", stealShield: "Someone just robbed them", stealCool: "This base needs a break", stealEmpty: "Someone took it first", stealLimit: "You robbed a lot today. Come back tomorrow", stealNet: "Couldn't reach the server. Try again soon", stealGone: "That base is gone",
    theftTitle: "You got robbed!", theftLine: "{nick} stole your {name}", comesBack: "Comes back in {m} min", backDone: "Already back", backHome: "A creature came back!", revenge: "Get revenge", gotIt: "OK",
    meTitle: "My base", nickLabel: "Nickname", nickSave: "Save", nickHint: "2-12 chars. No emoji or links", nickBad: "That name isn't allowed", netOn: "Online - others can rob your base", netOff: "Offline - playing practice bases", robbed: "Times robbed {n}", stoleCount: "Times stolen {n}", logTitle: "Recent robberies", logNone: "None yet", ago: "{m} min ago", agoH: "{h} h ago",
    skTitle: "Style", skBase: "Base floor", skCr: "Creature gear", skUse: "Use", skUsing: "In use", skBuy: "Unlock for {v}", skAd: "Watch ad to unlock", skNone: "None", skNew: "New style unlocked!",
    skReq_rebirth: "Rebirth {n}", skReq_book: "Finish {n} index pages", skReq_event: "Unlock in the Halloween event", skReq_over: "The event is over",
    sk_wood: "Wood floor", sk_cloud: "Cloud floor", sk_candy: "Candy floor", sk_gold: "Gold floor", sk_space: "Space floor", sk_haunt: "Haunted floor",
    cr_: "None", cr_bow: "Bow", cr_shades: "Shades", cr_party: "Party hat", cr_crown: "Crown", cr_halo: "Halo", cr_witch: "Witch hat",
    hwBoxName: "Pumpkin Box", hwBoxGuest: "A pumpkin box guest is here!", hwCandyGuest: "A candy pail is passing by!", hwTapMe: "Tap!", hwLine: "Halloween event - {d} days left - {n} more boxes", hwTitle: "Halloween event is on!",
    boxSkipTitle: "Open the box now", boxSkipAsk: "{s}s until it opens", boxSkipAd: "Watch ad to open now",
    tut1: "Tap the free guest to take it home!", tut2: "Tap the cash on a spot to collect!", tut3: "Save up and buy pricier creatures", tut4: "Rebirth stage unlocked",
  },
};
function T(key, vars) {
  let s = (STR[LANG] && STR[LANG][key]) ?? STR.ko[key] ?? key;
  if (vars) for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
  return s;
}
document.documentElement.lang = LANG;
