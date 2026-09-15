// Data Definitions
const CHARACTERS = {
    hitomi: { name: '吉川仁美', label: '雙簧管', voice: '優雅的聲音', cover: 'images/hitomi.jpg' },
    shigeki: { name: '江崎茂樹', label: '大號', voice: '低沉的聲音', cover: 'images/shigeki.jpg' },
    chizuru: { name: '芥川千鶴', label: '小號', voice: '嘹亮的聲音', cover: 'images/chizuru.jpg' },
    matsutani: { name: '松谷幸太郎', label: '顧問老師', voice: '嚴肅的聲音', cover: 'images/matsutani.jpg' },
    hiroko: { name: '五十嵐尋子', label: '副顧問老師', voice: '高貴的聲音', cover: 'images/hiroko.jpg' },
    ito: { name: '伊藤川', label: '薩克斯風', voice: '慵懶的聲音', cover: 'images/ito.jpg' }
};

const QUESTIONS = [
    {
        id: 'q1',
        type: 'select',
        nanaText: '歡迎來到菟道高中吹奏部！我是部長中川奈奈！首先呀，為了知道你適合哪個位置，我想多了解你一點！在班上，你覺得自己是哪一種人呢？（可多選並按優先級排序哦！）',
        options: [
            { id: 'q1_1', text: '喜歡照顧大家，是大家的主心骨', scores: { matsutani: 2, hiroko: 2 } },
            { id: 'q1_2', text: '有點害羞內向，但做事情很認真', scores: { hitomi: 2, shigeki: 2 } },
            { id: 'q1_3', text: '大大咧咧，重情重義，朋友受委屈我第一個上！', scores: { chizuru: 2, ito: 2 } },
            { id: 'q1_4', text: '表面上可能有點小脾氣，但其實內心很柔軟', scores: { ito: 2, matsutani: 2 } },
            { id: 'q1_5', text: '習慣把心事藏在心裡，默默承受', scores: { shigeki: 2, hitomi: 2 } },
            { id: 'q1_6', text: '獨立自主，遇到困難絕不輕易低頭', scores: { hiroko: 2, chizuru: 2 } }
        ]
    },
    {
        id: 'q2',
        type: 'select',
        nanaText: '如果有一天，吹奏部遇到了大危機！我們的樂譜突然不見了，你會怎麼做呢？（可多選並按優先級排序哦！）',
        options: [
            { id: 'q2_1', text: '冷靜下來，立刻指揮大家分頭尋找', scores: { matsutani: 2, hiroko: 2 } },
            { id: 'q2_2', text: '氣死了！到底是誰弄丟的！然後一邊罵一邊幫忙找', scores: { chizuru: 2, ito: 2 } },
            { id: 'q2_3', text: '覺得很自責，是不是自己沒收好，默默拼命找', scores: { hitomi: 2, shigeki: 2 } }
        ]
    },
    {
        id: 'q5',
        type: 'select',
        nanaText: '如果在我們社團練習的時候，發現有人不小心弄壞了重要的樂譜，你第一時間的反應會是什麼呢？',
        options: [
            { id: 'q5_1', text: '二話不說直接衝上去把對方罵跑！', scores: { chizuru: 3, ito: 3 } },
            { id: 'q5_2', text: '先躲起來觀察情況，然後立刻去找老師幫忙。', scores: { hitomi: 2, shigeki: 2 } },
            { id: 'q5_3', text: '走過去冷靜地用道理讓對方知難而退。', scores: { matsutani: 2, hiroko: 2 } },
            { id: 'q5_4', text: '假裝不經意地經過，然後「不小心」把飲料灑在欺負人的人身上。', scores: { ito: 2, chizuru: 1 } }
        ]
    },
    {
        id: 'q3',
        type: 'select',
        nanaText: '如果在吹奏部練習後突然下起大雨，你沒帶傘，你會怎麼做？',
        options: [
            { id: 'q3_1', text: '直接淋雨衝回家，這點小雨算什麼！', scores: { chizuru: 2, ito: 2 } },
            { id: 'q3_2', text: '乖乖在屋簷下等雨停，順便安靜地聽雨', scores: { hitomi: 2, shigeki: 2 } },
            { id: 'q3_3', text: '看看身邊有沒有同學也沒帶傘，想辦法借一把一起撐', scores: { matsutani: 2, hiroko: 2 } }
        ]
    },
    {
        id: 'q4',
        type: 'select',
        nanaText: '如果是文化祭的準備時間，大家都在為了表演忙碌，你通常會負責什麼工作呢？（可多選排序哦！）',
        options: [
            { id: 'q4_1', text: '擔任總召，分配每個人的工作並盯進度。', scores: { matsutani: 2, hiroko: 2 } },
            { id: 'q4_2', text: '負責最重要的表演橋段，我就是全場焦點！', scores: { chizuru: 2, ito: 2 } },
            { id: 'q4_3', text: '在旁邊默默幫忙準備道具，確認細節。', scores: { hitomi: 2, shigeki: 2 } },
            { id: 'q4_4', text: '雖然嘴上抱怨好麻煩，但還是做得比誰都認真。', scores: { ito: 2 } }
        ]
    }
];

const EMOTION_LINES = [
    { id: 'e1', text: '親情 (與母親相依為命)', scores: { hitomi: 5 } },
    { id: 'e2', text: '親情 (嚴厲的高壓家庭)', scores: { shigeki: -5 } }, // Disliking this gives Shigeki points
    { id: 'e3', text: '親情 (隔代教養，與長輩親近)', scores: { chizuru: 4, ito: 4 } },
    { id: 'e4', text: '親情 (兄妹情深)', scores: { matsutani: 4 } },
    { id: 'e5', text: '愛情 (默默暗戀)', scores: { shigeki: 4 } },
    { id: 'e6', text: '愛情 (青梅竹馬)', scores: { matsutani: 4, hiroko: 4 } },
    { id: 'e7', text: '愛情 (曾經歷過不好的戀情)', scores: { chizuru: 4 } },
    { id: 'e8', text: '友情 (被朋友無條件保護)', scores: { hitomi: 4 } },
    { id: 'e9', text: '友情 (保護朋友)', scores: { chizuru: 4, ito: 4 } },
    { id: 'e10', text: '師生情-向上 (身為學生受到老師關懷引導)', scores: { hitomi: 3, ito: 4 } },
    { id: 'e11', text: '師生情-向下 (身為老師守護並帶領學生)', scores: { matsutani: 5, hiroko: 5 } }
];

// Firebase Setup
const firebaseConfig = {
    apiKey: "AIzaSyC6fZuF8BTO_a-C0YAI5FeM14vaIo9WRh0",
    authDomain: "onigiri-chracter-survey.firebaseapp.com",
    databaseURL: "https://onigiri-chracter-survey-default-rtdb.firebaseio.com",
    projectId: "onigiri-chracter-survey",
    storageBucket: "onigiri-chracter-survey.firebasestorage.app",
    messagingSenderId: "337985628413",
    appId: "1:337985628413:web:f5ffc60cf5db18ed687694"
};

// 如果有跨區問題，自動嘗試備用網址
try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.error("Firebase init error", e);
}
const db = firebase.database();

// State
let state = {
    view: 'home',
    sessions: ['測試場次'],
    players: [],
    
    currentPlayer: {
        sessionId: '',
        name: '',
        gender: '',
        answers: {},
        emotions: {
            neutral: EMOTION_LINES.map(e => e.id),
            like: [],
            dislike: []
        },
        remark: ''
    },
    currentQuestionIndex: 0,
    currentFilterSession: ''
};

// Listen to Firebase Data
db.ref('sessions').on('value', snapshot => {
    const data = snapshot.val();
    let sessions = data ? Object.values(data) : [];
    if (sessions.length === 0) sessions = ['測試場次'];
    state.sessions = [...new Set(sessions)]; // Remove any duplicates
    if(state.view === 'organizer_dashboard' || state.view === 'player_setup') render();
});

db.ref('players').on('value', snapshot => {
    const data = snapshot.val();
    state.players = data ? Object.values(data) : [];
    if(state.view === 'organizer_dashboard') render();
});

// Utils
const saveSession = (newSession) => {
    if(!state.sessions.includes(newSession)) {
        db.ref('sessions').push(newSession);
    }
};

const deleteSessionFromDb = (sessionName) => {
    // 找出對應的 key 來刪除
    db.ref('sessions').once('value', snapshot => {
        snapshot.forEach(child => {
            if(child.val() === sessionName) {
                child.ref.remove();
            }
        });
    });
};

const savePlayer = (playerObj) => {
    db.ref('players').push(playerObj);
};

const deletePlayerFromDb = (playerObj) => {
    // 根據 name 和 sessionId 找出來刪除
    db.ref('players').once('value', snapshot => {
        snapshot.forEach(child => {
            const val = child.val();
            if(val.name === playerObj.name && val.sessionId === playerObj.sessionId) {
                child.ref.remove();
            }
        });
    });
};

const render = () => {
    const loader = document.getElementById('initial-loader');
    if (loader) {
        document.fonts.ready.then(() => {
            loader.remove();
        });
    }

    const app = document.getElementById('app');
    app.innerHTML = '';

    if (state.view === 'home') app.appendChild(renderHome());
    else if (state.view === 'player_setup') app.appendChild(renderPlayerSetup());
    else if (state.view === 'player_form') app.appendChild(renderPlayerForm());
    else if (state.view === 'player_thanks') app.appendChild(renderPlayerThanks());
    else if (state.view === 'organizer_dashboard') app.appendChild(renderOrganizerDashboard());
};

// Views
const renderHome = () => {
    const div = document.createElement('div');
    div.className = 'view-container home-screen';
    div.innerHTML = `
        <div class="home-blur-layer"></div>
        <div class="home-content" style="width: 100%; margin: auto; padding-bottom: 20px; display: flex; flex-direction: column; align-items: center; position: relative; z-index: 1;">
            <h2 class="title-header" style="border:none; color:white; text-shadow: 0 2px 10px rgba(0,0,0,0.6); margin-bottom: 30px; line-height: 1.5;">小飯糰吹奏部<br>入社問卷調查</h2>
            <button class="btn" onclick="setView('player_setup')">我想加入吹奏部，填寫入社申請</button>
            <button class="btn btn-secondary" onclick="enterOrganizer()">我是社長 (DM)</button>
        </div>
    `;
    return div;
};

window.enterOrganizer = () => {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const expectedPwd = "0521" + mm + dd;

    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.inset = '0';
    modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
    modal.style.backdropFilter = 'blur(8px)';
    modal.style.WebkitBackdropFilter = 'blur(8px)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '9999';
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.3s ease';

    modal.innerHTML = `
        <div style="background: rgba(255,255,255,0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.8); border-radius: 20px; padding: 30px; width: 85%; max-width: 350px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); text-align: center;">
            <h3 style="font-family: 'Kurewa', 'OpenHuninn', sans-serif; color: var(--dark-blue); font-size: 24px; margin-bottom: 10px;">社長專區登入</h3>
            <p style="font-family: 'OpenHuninn', sans-serif; font-size: 15px; color: var(--text-color); margin-bottom: 20px;">請輸入社長八碼動態密碼：</p>
            <input type="password" id="dm-pwd-input" placeholder="請輸入密碼" style="width: 100%; padding: 12px; border: 2px solid rgba(255,255,255,0.8); border-radius: 10px; background: rgba(255,255,255,0.6); font-size: 16px; margin-bottom: 20px; text-align: center; outline: none; color: var(--dark-blue); box-sizing: border-box; transition: all 0.3s;">
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button id="dm-cancel-btn" class="btn btn-secondary" style="flex: 1; padding: 10px; margin: 0; min-height: auto; border-radius: 10px;">取消</button>
                <button id="dm-confirm-btn" class="btn" style="flex: 1; padding: 10px; margin: 0; min-height: auto; border-radius: 10px;">確認</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Trigger fade in
    requestAnimationFrame(() => modal.style.opacity = '1');
    
    const input = document.getElementById('dm-pwd-input');
    input.focus();

    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => document.body.removeChild(modal), 300);
    };

    const submitPwd = () => {
        const pwd = input.value;
        if (pwd === expectedPwd) {
            closeModal();
            setView('organizer_dashboard');
        } else {
            input.style.border = '2px solid #ff6b6b';
            input.style.animation = 'shake 0.4s';
            setTimeout(() => input.style.animation = '', 400);
            input.value = '';
            input.placeholder = '密碼錯誤！';
        }
    };

    document.getElementById('dm-cancel-btn').onclick = closeModal;
    document.getElementById('dm-confirm-btn').onclick = submitPwd;
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitPwd();
    });
};

const renderPlayerSetup = () => {
    const div = document.createElement('div');
    div.className = 'view-container';
    
    let sessionOptions = state.sessions.map(s => `<option value="${s}">${s}</option>`).join('');
    
    div.innerHTML = `
        <h2 class="title-header">入社基本資料</h2>
        <div class="nana-bubble">
            歡迎來到菟道高中吹奏部！我是部長中川奈奈！很高興見到你呀～<br>
            先告訴我你的名字和場次吧！
        </div>
        
        <div class="input-group">
            <label>參與場次</label>
            <select id="setup-session">
                ${sessionOptions}
            </select>
        </div>
        <div class="input-group">
            <label>玩家暱稱</label>
            <input type="text" id="setup-name" placeholder="輸入你的名字">
        </div>
        <div class="input-group">
            <label>想體驗的角色性別</label>
            <select id="setup-gender">
                <option value="M">男</option>
                <option value="F">女</option>
                <option value="O">不分</option>
            </select>
        </div>
        
        <div class="bottom-nav">
            <button class="btn btn-secondary" onclick="setView('home')">返回</button>
            <button class="btn" onclick="startQuestions()">開始入社面試</button>
        </div>
    `;

    return div;
};

window.startQuestions = () => {
    const nameInput = document.getElementById('setup-name');
    const name = nameInput.value.trim();
    if (!name) {
        nameInput.style.border = '2px solid #ff6b6b';
        nameInput.placeholder = '請務必輸入暱稱！';
        nameInput.style.animation = 'shake 0.4s';
        setTimeout(() => nameInput.style.animation = '', 400);
        return;
    }
    
    state.currentPlayer = {
        sessionId: document.getElementById('setup-session').value,
        name: name,
        gender: document.getElementById('setup-gender').value,
        answers: {},
        emotions: {
            neutral: EMOTION_LINES.map(e => e.id),
            like: [],
            dislike: []
        },
        remark: ''
    };
    state.currentQuestionIndex = 0;
    setView('player_form');
};

const renderPlayerForm = () => {
    const div = document.createElement('div');
    div.className = 'view-container';

    let content = '';
    const isEmotionQuestion = state.currentQuestionIndex === QUESTIONS.length;
    const isRemarkQuestion = state.currentQuestionIndex === QUESTIONS.length + 1;

    let callName = state.currentPlayer.name;
    if (state.currentPlayer.gender === 'M') callName += '君';
    else if (state.currentPlayer.gender === 'F') callName = '小' + callName;
    else callName += '同学';

    if (isEmotionQuestion) {
        content = `
            <h2 class="title-header">社團羈絆偏好</h2>
            <div class="nana-bubble">
                ${callName}，在我們吹奏部，除了音樂，最重要的就是大家的羈絆啦！<br>
                在高中三年裡，你最期待在社團中經歷什麼樣的故事或羈絆呢？請幫我拖曳到「期待」或「無法接受」區塊，在區塊內越上面的分數越高哦！<br>
                （如果有覺得無感或不在意的，就放在「未分類」不用動也沒關係！）
            </div>
            
            <div class="zone-title">未分類 (無感可不理會)</div>
            <div id="zone-neutral" class="dnd-container neutral-zone">
                ${state.currentPlayer.emotions.neutral.map(eid => {
                    const e = EMOTION_LINES.find(x => x.id === eid);
                    return `<div class="dnd-item" data-id="${eid}">${e.text}</div>`;
                }).join('')}
            </div>
            
            <div class="zones-wrapper" style="display: flex; gap: 15px;">
                <div style="flex: 1;">
                    <div class="zone-title" style="font-size: 16px;">💖 期待</div>
                    <div id="zone-like" class="dnd-container zone-like" style="min-height: 150px;">
                        ${state.currentPlayer.emotions.like.map(eid => {
                            const e = EMOTION_LINES.find(x => x.id === eid);
                            return `<div class="dnd-item" data-id="${eid}">${e.text}</div>`;
                        }).join('')}
                    </div>
                </div>
                
                <div style="flex: 1;">
                    <div class="zone-title" style="font-size: 16px;">⚡ 無法接受</div>
                    <div id="zone-dislike" class="dnd-container zone-dislike" style="min-height: 150px;">
                        ${state.currentPlayer.emotions.dislike.map(eid => {
                            const e = EMOTION_LINES.find(x => x.id === eid);
                            return `<div class="dnd-item" data-id="${eid}">${e.text}</div>`;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;

        setTimeout(() => {
            const initSortable = (id, listName) => {
                new Sortable(document.getElementById(id), {
                    group: 'shared',
                    animation: 150,
                    delay: 200,
                    delayOnTouchOnly: true,
                    forceFallback: true,
                    fallbackOnBody: true,
                    ghostClass: 'sortable-ghost',
                    dragClass: 'sortable-drag',
                    fallbackClass: 'sortable-fallback',
                    onEnd: function (evt) {
                        // Rebuild state on drop
                        const getIds = (zoneId) => Array.from(document.getElementById(zoneId).children).map(el => el.getAttribute('data-id'));
                        state.currentPlayer.emotions.neutral = getIds('zone-neutral');
                        state.currentPlayer.emotions.like = getIds('zone-like');
                        state.currentPlayer.emotions.dislike = getIds('zone-dislike');
                    }
                });
            };
            initSortable('zone-neutral', 'neutral');
            initSortable('zone-like', 'like');
            initSortable('zone-dislike', 'dislike');
        }, 0);

        div.innerHTML = `
            ${content}
            <div class="bottom-nav">
                <button class="btn btn-secondary" onclick="prevQuestion()">回上一題</button>
                <button class="btn" onclick="nextQuestion()">下一題 / 確認</button>
            </div>
        `;

    } else if (isRemarkQuestion) {
        content = `
            <h2 class="title-header">最後確認</h2>
            <div class="nana-bubble">
                ${callName}，最後還有什麼想跟我們說的嗎？（不管是對社團的期待、不能接受的雷點、或是想跟學姐說的悄悄話，都可以寫在你的申請書備註裡哦！）
            </div>
            <div class="input-group">
                <textarea id="remark-text" rows="5" placeholder="寫下你的備註...">${state.currentPlayer.remark}</textarea>
            </div>
            <div class="bottom-nav">
                <button class="btn btn-secondary" onclick="prevQuestion()">上一步</button>
                <button class="btn" onclick="nextQuestion()">繳交入社申請表</button>
            </div>
        `;
        div.innerHTML = content;
        return div;
    } else {
        const q = QUESTIONS[state.currentQuestionIndex];
        const answers = state.currentPlayer.answers[q.id] || [];
        
        content = `
            <h2 class="title-header">第 ${state.currentQuestionIndex + 1} 題</h2>
            <div class="nana-bubble">
                ${q.nanaText.replace('你', callName)}
            </div>
            <div class="options-container">
                ${q.options.map(opt => {
                    const ansIndex = answers.indexOf(opt.id);
                    const isSelected = ansIndex !== -1;
                    const badgeHtml = isSelected ? `<span class="sort-badge">${ansIndex + 1}</span>` : '';
                    return `
                    <div class="option-card ${isSelected ? 'selected' : ''}" data-opt-id="${opt.id}">
                        ${badgeHtml}
                        ${opt.text}
                    </div>
                    `;
                }).join('')}
            </div>
        `;

        setTimeout(() => {
            document.querySelectorAll('.option-card').forEach(card => {
                card.onclick = () => {
                    const optId = card.getAttribute('data-opt-id');
                    let currAns = state.currentPlayer.answers[q.id] || [];
                    if (currAns.includes(optId)) {
                        currAns = currAns.filter(id => id !== optId);
                    } else {
                        currAns.push(optId);
                    }
                    state.currentPlayer.answers[q.id] = currAns;
                    render(); // 重新渲染畫面以顯示正確的排序數字
                };
            });
        }, 0);

        div.innerHTML = `
            ${content}
            <div class="bottom-nav">
                <button class="btn btn-secondary" onclick="prevQuestion()">回上一題</button>
                <button class="btn" onclick="nextQuestion()">下一題 / 確認</button>
            </div>
        `;
    }

    return div;
};

window.prevQuestion = () => {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        render();
    } else {
        setView('player_setup');
    }
};

window.nextQuestion = () => {
    if (state.currentQuestionIndex === QUESTIONS.length + 1) {
        // Submit
        state.currentPlayer.remark = document.getElementById('remark-text').value;
        const playerObj = JSON.parse(JSON.stringify(state.currentPlayer));
        savePlayer(playerObj);
        setView('player_thanks');
    } else {
        state.currentQuestionIndex++;
        render();
    }
};

const renderPlayerThanks = () => {
    const div = document.createElement('div');
    div.className = 'view-container home-screen';
    div.innerHTML = `
        <h2 class="title-header" style="border:none;">送出成功！</h2>
        <div class="nana-bubble" style="text-align:left;">
            非常感謝你的填寫！<br>
            接下來就請耐心等候我的分配吧！<br>
            超級期待在吹奏部見到你的那一天哦！
        </div>
        <button class="btn" onclick="setView('home')">回首頁</button>
    `;
    return div;
};

// --- Organizer Dashboard ---

const calculateScores = (player) => {
    let scores = { hitomi: 0, shigeki: 0, chizuru: 0, matsutani: 0, hiroko: 0, ito: 0 };
    
    // Q Scores
    QUESTIONS.forEach(q => {
        const answers = player.answers[q.id] || [];
        answers.forEach((ansId, index) => {
            const opt = q.options.find(o => o.id === ansId);
            if (opt) {
                const weight = Math.max(1, 1.5 - index * 0.2);
                for (const [char, val] of Object.entries(opt.scores)) {
                    scores[char] += val * weight;
                }
            }
        });
    });

    // Emotion Scores
    player.emotions.like.forEach((eid, index) => {
        const e = EMOTION_LINES.find(x => x.id === eid);
        if (e) {
            // Higher in 'like' list -> more points
            const weight = Math.max(1, 3 - index * 0.5); 
            for (const [char, val] of Object.entries(e.scores)) {
                scores[char] += (val * weight);
            }
        }
    });

    player.emotions.dislike.forEach((eid, index) => {
        const e = EMOTION_LINES.find(x => x.id === eid);
        if (e) {
            for (const [char, val] of Object.entries(e.scores)) {
                if (val > 0) scores[char] -= (val * 2); // Severe deduction
                else scores[char] -= (val * 2); // if val is -5, this becomes +10. (Disliking abuse = good for Shigeki)
            }
        }
    });

    // Convert raw score to percentage
    const MAX_THEORETICAL = 42;
    for (let k in scores) {
        let p = (scores[k] / MAX_THEORETICAL) * 100;
        if (p > 100) p = 100;
        if (p < 0) p = 0;
        scores[k] = parseFloat(p.toFixed(1));
    }

    return scores;
};

let orgTab = 'smart';
let currentSmartAssignment = null;
window.setOrgTab = (tab) => {
    orgTab = tab;
    render();
};

const getBestAssignment = (players) => {
    if (players.length === 0) return null;
    
    let bestAssignment = null;
    let maxScore = -Infinity;
    const activePlayers = players.slice(0, 6);
    const allChars = Object.keys(CHARACTERS);
    
    function permute(arr) {
        if (arr.length === 0) return [[]];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
            for (let r of rest) {
                result.push([arr[i]].concat(r));
            }
        }
        return result;
    }
    
    const perms = permute(allChars);
    
    for (let p of perms) {
        let currentScore = 0;
        let valid = true;
        let assignment = {}; 
        
        for (let i = 0; i < activePlayers.length; i++) {
            const player = activePlayers[i];
            const charId = p[i];
            
            if (player.gender === 'M' && charGenders[charId] === 'F') { valid = false; break; }
            if (player.gender === 'F' && charGenders[charId] === 'M') { valid = false; break; }
            
            const scores = calculateScores(player);
            currentScore += (scores[charId] || 0);
            assignment[player.name] = { charId, score: scores[charId] || 0 };
        }
        
        if (valid && currentScore > maxScore) {
            maxScore = currentScore;
            bestAssignment = assignment;
        }
    }
    
    return { assignment: bestAssignment, totalScore: maxScore };
};

const renderOrganizerDashboard = () => {
    const div = document.createElement('div');
    div.className = 'view-container';
    div.style.backgroundColor = '#f1f3f5';
    
    const filterSession = state.currentFilterSession;
    let filteredPlayers = state.players;
    if (filterSession) {
        filteredPlayers = state.players.filter(p => p.sessionId === filterSession);
    }
    
    const tabsHtml = `
        <div style="display:flex; border-bottom: 2px solid #ccc; margin-bottom: 20px;">
            <div onclick="setOrgTab('smart')" style="flex:1; text-align:center; padding:10px; cursor:pointer; font-size:18px; font-weight:bold; transition:all 0.3s; ${orgTab === 'smart' ? 'border-bottom: 4px solid var(--primary-color); color: var(--primary-color);' : 'color: #adb5bd;'}">智慧推薦分角</div>
            <div onclick="setOrgTab('manual')" style="flex:1; text-align:center; padding:10px; cursor:pointer; font-size:18px; font-weight:bold; transition:all 0.3s; ${orgTab === 'manual' ? 'border-bottom: 4px solid var(--primary-color); color: var(--primary-color);' : 'color: #adb5bd;'}">手動自由分角</div>
        </div>
    `;
    
    let contentHtml = '';
    
    if (orgTab === 'smart') {
        const best = getBestAssignment(filteredPlayers);
        
        if (!best || !best.assignment) {
            contentHtml = `<div style="text-align:center; padding: 30px; color: #666;">無法計算推薦分角。<br>請確認是否沒有玩家資料，或是玩家選擇的性別條件產生了無法分配的衝突（例如男生太多）。</div>`;
        } else {
            currentSmartAssignment = best.assignment;
            contentHtml = `
                <button class="btn" onclick="exportResult(true)" style="margin-bottom: 20px;">匯出智慧分角結果圖片</button>
                <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: var(--box-shadow);">
                    <h3 style="text-align:center; color: var(--dark-blue); margin-bottom: 25px;">全團平均適配度：<span style="color: var(--primary-color); font-size: 28px;">${(best.totalScore / Object.keys(best.assignment).length).toFixed(1)}%</span></h3>
                    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                        ${Object.entries(best.assignment).map(([playerName, data]) => {
                            const char = CHARACTERS[data.charId];
                            return `
                                <div style="border: 2px solid rgba(108, 166, 193, 0.3); border-radius: 12px; padding: 15px; background: rgba(108, 166, 193, 0.05); display: flex; align-items: center; gap: 15px;">
                                    <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                                        <img src="${char.cover}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 15%;">
                                    </div>
                                    <div>
                                        <div style="font-weight:bold; font-size: 18px; color: #3B4A54; margin-bottom: 5px;">${playerName}</div>
                                        <div style="color: var(--primary-color); font-weight:bold; font-size: 16px; margin-bottom: 2px;">👉 ${char.name} <span style="font-size:13px; color:#666;">(${char.voice})</span></div>
                                        <div style="font-size: 13px; color: #888;">適配度：${data.score.toFixed(1)}%</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }
    } else {
        contentHtml = `
            <button class="btn" onclick="exportResult()" style="margin-bottom: 20px;">匯出分角結果圖片</button>
            <div style="display:flex; flex-direction:column; gap:20px;" id="export-container">
                <div style="position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); padding: 15px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); border: 2px solid var(--primary-color);">
                    <h3 style="margin-bottom:10px; color:var(--dark-blue); font-size: 16px;">👇 玩家備選區 (上下滑動並拖曳至下方)</h3>
                    <div id="org-players-list" style="max-height: 25vh; overflow-y: auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; align-items: start; padding-right: 5px;">
                        ${renderPlayerCards()}
                    </div>
                </div>
                <div style="background:white; padding:15px; border-radius:10px; box-shadow: var(--box-shadow);" id="export-canvas-target">
                    <h3 style="text-align:center; margin-bottom:20px; color:var(--dark-blue);">分角結果版面</h3>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        ${Object.entries(CHARACTERS).map(([id, char]) => `
                            <div>
                                <div class="role-slot-title">${char.name} <span style="font-size:14px;color:#666;">(${char.voice})</span></div>
                                <div class="role-slot" id="slot-${id}" style="min-height: 80px;"></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            const listIds = ['org-players-list', ...Object.keys(CHARACTERS).map(id => `slot-${id}`)];
            listIds.forEach(id => {
                const el = document.getElementById(id);
                if(el) new Sortable(el, { 
                    group: 'assignment', 
                    animation: 150,
                    delay: 200,
                    delayOnTouchOnly: true,
                    forceFallback: true,
                    fallbackOnBody: true,
                    ghostClass: 'sortable-ghost',
                    dragClass: 'sortable-drag',
                    fallbackClass: 'sortable-fallback'
                });
            });
        }, 0);
    }
    
    div.innerHTML = `
        <h2 class="title-header">社長後台版面</h2>
        
        <div style="background:white; padding:20px; border-radius:10px; margin-bottom:25px; box-shadow:var(--box-shadow);">
            <h3 style="margin-bottom:15px; color:var(--dark-blue);">場次管理</h3>
            <div style="display:flex; gap:10px;">
                <input type="text" id="new-session-name" placeholder="新場次名稱" style="flex:1; padding:10px; border:1px solid #ddd; border-radius:8px;">
                <button class="btn" style="width:auto; margin:0;" onclick="addSession()">新增</button>
            </div>
            <div style="margin-top:15px; display:flex; flex-wrap:wrap; gap:10px;" id="session-list">
                ${state.sessions.map(s => `<span style="background:#f8f9fa; border: 1px solid #eee; padding:8px 15px; border-radius:20px; font-size:14px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">${s} <span style="color:#ff6b6b; cursor:pointer; margin-left:8px; font-weight:bold;" onclick="deleteSession('${s}')">✖</span></span>`).join('')}
            </div>
        </div>

        <div style="display:flex; gap:10px; margin-bottom:30px;">
            <select id="filter-session" style="flex:1; padding:12px; border-radius:8px; border: 1px solid #ddd; outline:none; background:white; color:var(--dark-blue); font-size:16px;" onchange="setFilterSession(event)">
                <option value="" ${state.currentFilterSession === '' ? 'selected' : ''}>顯示：全部場次</option>
                ${state.sessions.map(s => `<option value="${s}" ${state.currentFilterSession === s ? 'selected' : ''}>顯示場次：${s}</option>`).join('')}
            </select>
            <button class="btn btn-secondary" style="width:auto; margin:0;" onclick="setView('home')">首頁</button>
        </div>
        
        ${tabsHtml}
        ${contentHtml}
    `;

    return div;
};

const charGenders = {
    hitomi: 'F', shigeki: 'M', chizuru: 'F',
    matsutani: 'M', hiroko: 'F', ito: 'M'
};

const getCharNames = (scoresObj, playerGender) => {
    return Object.entries(scoresObj).map(([k,v]) => {
        if (playerGender === 'M' && charGenders[k] === 'F') return '';
        if (playerGender === 'F' && charGenders[k] === 'M') return '';
        
        if(v > 0) return `<span style="color:green;">+${CHARACTERS[k].name}</span>`;
        if(v < 0) return `<span style="color:red;">-${CHARACTERS[k].name}</span>`;
        return '';
    }).filter(x=>x).join(' ');
};

const renderPlayerCards = () => {
    const filterSession = state.currentFilterSession;
    let filteredPlayers = state.players;
    if (filterSession) {
        filteredPlayers = state.players.filter(p => p.sessionId === filterSession);
    }

    return filteredPlayers.map((player) => {
        const actualIdx = state.players.indexOf(player);
        const scores = calculateScores(player);
        
        let validChars = Object.entries(scores);
        if (player.gender === 'M' || player.gender === 'F') {
            validChars = validChars.filter(([charId]) => charGenders[charId] === player.gender);
        }
        
        const sortedChars = validChars.sort((a,b) => b[1] - a[1]);
        const recommendedList = sortedChars.slice(0,3);
        const recommendedDisplay = recommendedList.map(c => `<span style="color: var(--dark-blue); font-weight: bold;">${CHARACTERS[c[0]].name} (${c[1].toFixed(1)}%)</span>`).join(' > ');
        const top3Sum = recommendedList.reduce((sum, c) => sum + c[1], 0);

        return `
            <div class="player-card" data-pidx="${actualIdx}" style="cursor:grab; margin-bottom:10px; padding: 15px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3 style="margin:0;">${player.name} (${player.gender})</h3>
                    <button onclick="deletePlayer(${actualIdx})" style="color:red; border:none; background:none; cursor:pointer; font-size:20px;">×</button>
                </div>
                <div style="font-size:14px; margin-top:10px; margin-bottom:5px;">前三推薦：<br>${recommendedDisplay}</div>
                <div style="font-size:14px; color: var(--primary-color); font-weight: bold; margin-bottom:10px;">總適配度：${top3Sum.toFixed(1)}%</div>
                <button onclick="showPlayerDetails(${actualIdx})" style="width:100%; padding:8px; background:var(--primary-color); color:white; border:none; border-radius:5px; cursor:pointer; font-size:14px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">🔍 查看填寫資料</button>
            </div>
        `;
    }).join('');
};

const getPlayerDetailsHtml = (player) => {
    let answerHtml = '';
    QUESTIONS.forEach((q, idx) => {
        const ans = player.answers[q.id] || [];
        if(ans.length > 0) {
            let qHtml = `<div style="color:#888; font-size:11px; margin-top:8px;">[第 ${idx + 1} 題]</div>`;
            let hasOpt = false;
            ans.forEach(ansId => {
                const opt = q.options.find(o => o.id === ansId);
                if(opt) {
                    const scoreNames = getCharNames(opt.scores, player.gender);
                    if (scoreNames) {
                        qHtml += `<div style="margin-bottom: 3px;">- ${opt.text} (${scoreNames})</div>`;
                        hasOpt = true;
                    }
                }
            });
            if (hasOpt) answerHtml += qHtml;
        }
    });
    if (answerHtml) {
        answerHtml = `<div style="font-size:13px; margin-top:5px; border-bottom:1px dashed #ccc; padding-bottom: 10px;"><b>問卷選擇：</b>${answerHtml}</div>`;
    }

    let emoHtml = `<div style="font-size:13px; margin-top:10px;"><b>期待的羈絆:</b><br>`;
    player.emotions.like.forEach(eid => {
        const e = EMOTION_LINES.find(x => x.id === eid);
        const scoreNames = getCharNames(e.scores, player.gender);
        if (scoreNames) emoHtml += `- ${e.text} <span style="color:var(--primary-color);">(${scoreNames})</span><br>`;
    });
    emoHtml += `<br><b>無法接受的雷點:</b><br>`;
    player.emotions.dislike.forEach(eid => {
        const e = EMOTION_LINES.find(x => x.id === eid);
        if (e) {
            let invertedScores = {};
            for (let k in e.scores) invertedScores[k] = -e.scores[k];
            const scoreNames = getCharNames(invertedScores, player.gender);
            if (scoreNames) emoHtml += `<div style="color:red;">- ${e.text} (${scoreNames})</div>`;
        }
    });
    emoHtml += `</div>`;
    
    return `
        <div style="text-align: left;">
            ${answerHtml}
            ${emoHtml}
            <div style="margin-top:10px; font-weight:bold; color:red; font-size:14px; background:#ffe6e6; padding:8px; border-radius:5px;">備註: ${player.remark || '無'}</div>
        </div>
    `;
};

window.showPlayerDetails = (pIdx) => {
    const player = state.players[pIdx];
    if(!player) return;
    
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0,0,0,0.6)';
    modal.style.backdropFilter = 'blur(4px)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '9999';
    modal.style.padding = '20px';
    
    const content = document.createElement('div');
    content.style.backgroundColor = '#fff';
    content.style.width = '100%';
    content.style.maxWidth = '400px';
    content.style.maxHeight = '80vh';
    content.style.borderRadius = '15px';
    content.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.overflow = 'hidden';
    
    const header = document.createElement('div');
    header.style.padding = '15px 20px';
    header.style.backgroundColor = 'var(--primary-color)';
    header.style.color = '#fff';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.innerHTML = `
        <h3 style="margin:0; font-size:18px;">${player.name} 的詳細資料</h3>
        <button id="close-modal-btn" style="background:none; border:none; color:#fff; font-size:24px; cursor:pointer; line-height:1;">&times;</button>
    `;
    
    const body = document.createElement('div');
    body.style.padding = '20px';
    body.style.overflowY = 'auto';
    body.innerHTML = getPlayerDetailsHtml(player);
    
    content.appendChild(header);
    content.appendChild(body);
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    const closeBtn = document.getElementById('close-modal-btn');
    closeBtn.onclick = () => document.body.removeChild(modal);
    modal.onclick = (e) => {
        if(e.target === modal) document.body.removeChild(modal);
    };
};

window.setView = (viewName) => {
    state.view = viewName;
    const app = document.getElementById('app');
    
    if (viewName === 'home') {
        app.classList.add('is-home');
        app.classList.remove('has-blur');
    } else {
        app.classList.remove('is-home');
        app.classList.add('has-blur');
    }
    
    render();
};

window.addSession = () => {
    const input = document.getElementById('new-session-name');
    const v = input.value.trim();
    if (v && !state.sessions.includes(v)) {
        saveSession(v);
        input.value = ''; // clear input
        // Let Firebase listener handle the state update and render
    }
};

window.setFilterSession = (e) => {
    state.currentFilterSession = e.target.value;
    render();
};

window.deleteSession = (s) => {
    if(confirm('確定刪除場次 ' + s + ' ?')) {
        deleteSessionFromDb(s);
        state.sessions = state.sessions.filter(x => x !== s);
        if (state.currentFilterSession === s) state.currentFilterSession = '';
        render();
    }
};

window.deletePlayer = (idx) => {
    if(confirm('確定刪除此玩家?')) {
        const playerObj = state.players[idx];
        if (playerObj) deletePlayerFromDb(playerObj);
    }
};

window.exportResult = (isSmart = false) => {
    // Show a small loading indicator while rendering
    const btn = event ? event.currentTarget : null;
    if (btn) {
        btn.originalText = btn.innerText;
        btn.innerText = '處理中...';
        btn.disabled = true;
    }

    setTimeout(() => {
        const exportDiv = document.createElement('div');
        exportDiv.style.width = '1080px';
        exportDiv.style.minHeight = '1920px'; // Ensure at least phone proportion
        exportDiv.style.height = 'auto'; // Allow it to expand to fit contents without cutting off
        exportDiv.style.padding = '60px';
        exportDiv.style.background = 'url("cover.jpg") center/cover';
        exportDiv.style.position = 'absolute';
        exportDiv.style.left = '-9999px';
        exportDiv.style.top = '0';
        exportDiv.style.display = 'flex';
        exportDiv.style.flexDirection = 'column';
        exportDiv.style.alignItems = 'center';
        
        // Add semi-transparent overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.inset = '0';
        overlay.style.background = 'rgba(255, 255, 255, 0.7)';
        overlay.style.backdropFilter = 'blur(15px)';
        overlay.style.WebkitBackdropFilter = 'blur(15px)';
        overlay.style.zIndex = '-1';
        exportDiv.appendChild(overlay);
        
        const title = document.createElement('h2');
        title.innerText = '分角結果';
        title.style.fontFamily = "'Kurewa', 'OpenHuninn', sans-serif";
        title.style.fontSize = '80px'; // Made bigger for 1920px height
        title.style.color = '#2A4B7C';
        title.style.marginBottom = '60px';
        title.style.textShadow = '0 2px 10px rgba(255,255,255,0.8)';
        exportDiv.appendChild(title);
        
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        grid.style.gap = '40px';
        grid.style.width = '100%';
        grid.style.flex = '1';
        
        Object.entries(CHARACTERS).forEach(([id, char]) => {
            let playerNames = '';
            if (isSmart && currentSmartAssignment) {
                const assignedPlayer = Object.entries(currentSmartAssignment).find(([name, data]) => data.charId === id);
                if (assignedPlayer) playerNames = assignedPlayer[0];
            } else {
                const slot = document.getElementById('slot-' + id);
                playerNames = Array.from(slot.children).map(c => {
                    const pIdx = c.getAttribute('data-pidx');
                    return state.players[pIdx] ? state.players[pIdx].name : '';
                }).filter(n => n).join(', ');
            }
            
            const cell = document.createElement('div');
            cell.style.display = 'flex';
            cell.style.flexDirection = 'column';
            cell.style.background = 'rgba(255, 255, 255, 0.85)';
            cell.style.borderRadius = '24px';
            cell.style.overflow = 'hidden';
            cell.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            cell.style.border = '1px solid rgba(255, 255, 255, 0.9)';
            
            cell.innerHTML = `
                <div style="width: 100%; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; padding: 0;">
                    <img src="${char.cover}" style="width: 100%; height: auto; display: block;">
                </div>
                <div style="padding: 30px; display: flex; flex-direction: column; justify-content: center; align-items: center; background: white; border-top: 2px solid #e9ecef;">
                    <div style="font-family: 'Kurewa', 'OpenHuninn', sans-serif; font-size: 38px; color: #2A4B7C; margin-bottom: 10px;">${char.voice}</div>
                    <div style="font-family: 'OpenHuninn', sans-serif; font-size: 32px; font-weight: bold; color: #3B4A54;">${playerNames || '<span style="color:#adb5bd;font-weight:normal;">尚未分配</span>'}</div>
                </div>
            `;
            grid.appendChild(cell);
        });
        
        exportDiv.appendChild(grid);
        document.body.appendChild(exportDiv);

        html2canvas(exportDiv, { backgroundColor: null, useCORS: true, scale: 1 }).then(canvas => {
            document.body.removeChild(exportDiv);
            if (btn) {
                btn.innerText = btn.originalText;
                btn.disabled = false;
            }
            const dataUrl = canvas.toDataURL('image/png', 0.8);
            
            // Show modal instead of downloading directly
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0'; modal.style.left = '0'; modal.style.right = '0'; modal.style.bottom = '0';
            modal.style.backgroundColor = 'rgba(0,0,0,0.85)';
            modal.style.zIndex = '100000';
            modal.style.display = 'flex';
            modal.style.flexDirection = 'column';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.padding = '20px';
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.3s';
            
            modal.innerHTML = `
                <div style="color: white; font-size: 18px; margin-bottom: 20px; font-weight: bold; text-align: center; line-height: 1.5;">✨ 匯出成功 ✨<br>請長按下方圖片以儲存至手機相簿</div>
                <div style="overflow-y: auto; max-height: 70vh; width: 100%; text-align: center;">
                    <img src="${dataUrl}" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                </div>
                <button class="btn" style="margin-top: 30px; padding: 12px 30px; border: 1px solid white;" onclick="this.parentElement.style.opacity = '0'; setTimeout(() => this.parentElement.remove(), 300)">關閉</button>
            `;
            
            document.body.appendChild(modal);
            requestAnimationFrame(() => modal.style.opacity = '1');
        }).catch(err => {
            console.error('Export failed', err);
            document.body.removeChild(exportDiv);
            if (btn) {
                btn.innerText = btn.originalText;
                btn.disabled = false;
            }
        });
    }, 100);
};

// Init
render();

// BGM Logic
let bgmStarted = false;
let isMuted = false; // Start with intention to play

window.toggleBgm = () => {
    const bgm = document.getElementById('bgm');
    const toggle = document.getElementById('bgm-toggle');
    
    if (bgm.paused) {
        bgm.play().then(() => {
            bgmStarted = true;
            isMuted = false;
            toggle.classList.remove('muted');
        }).catch(err => console.log('BGM Play Error:', err));
    } else {
        bgm.pause();
        isMuted = true;
        toggle.classList.add('muted');
    }
};

const tryPlayBgm = () => {
    const bgm = document.getElementById('bgm');
    const toggle = document.getElementById('bgm-toggle');
    if (!bgmStarted && !isMuted) {
        bgm.volume = 0.4;
        bgm.play().then(() => {
            bgmStarted = true;
            isMuted = false;
            toggle.classList.remove('muted');
        }).catch(err => {
            // Autoplay blocked by browser. We show it as muted.
            isMuted = true;
            toggle.classList.add('muted');
            console.log('Autoplay blocked, user must click to play.');
        });
    }
};

// Try on load
document.addEventListener('DOMContentLoaded', tryPlayBgm);

// Try on first click in case it was blocked
document.body.addEventListener('click', () => {
    if (!bgmStarted && isMuted) {
        const bgm = document.getElementById('bgm');
        bgm.volume = 0.4;
        bgm.play().then(() => {
            bgmStarted = true;
            isMuted = false;
            document.getElementById('bgm-toggle').classList.remove('muted');
        }).catch(e => console.log(e));
    }
}, { once: true });
