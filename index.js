const dataSets = [
    {
        id: "message-1",
        messages: [
            'アドレス１',
            'アドレス８',
            'アドレス１５',
        ]
    },
    {
        id: "message-2",
        messages: [
            'XX番教室',
            '--番教室',
            '  番教室',
        ]
    },
    {
        id: "message-3",
        urls: [
            '',
            'https://script.google.com/macros/s/AKfycbwIJpL5YD1wdOQ_9JyPWyl4nOeJ8MjhfjTM6ZBxDUJC0c_sqiA39hySZ4HSBQgBXKH6uw/exec',
            '',
        ]
    },
    {
        id: "message-4",
        urls: [
            '',
            'https://script.google.com/macros/s/AKfycbyheY2zZ8JPXKGDvRVI8c3mRZBIAOy9QlAttUbGEDccyudefod4gd39_XfHC5Wjxakd/exec',
            '',
        ]
    },
    {
        id: "message-5",
        urls: [
            '',
            'https://script.google.com/macros/s/AKfycbyABhOmjScX-zhD5JH9vpSc9x2-9kfu-b0OqdezQGcku-02aY4s1kDY9eDPHZA5hbvITw/exec',
            '',
        ]
    },
    {
        id: "message-6",
        messages: [
            'アドレス２',
            'アドレス９',
            'アドレス１６',
        ]
    },
    {
        id: "message-7",
        messages: [
            '未入力',
            'XX番教室',
            '--番教室',
        ]
    },
    {
        id: "message-8",
        urls: [
            'https://script.google.com/macros/s/AKfycbwwaQeeGHQ-7a4ZRhphFnnWUAH2cLH4l_-qh11_uCv7Vi-ZPTKhH91ChEuNmt09uV8aVQ/exec',
            'https://script.google.com/macros/s/AKfycbwIJpL5YD1wdOQ_9JyPWyl4nOeJ8MjhfjTM6ZBxDUJC0c_sqiA39hySZ4HSBQgBXKH6uw/exec',
            '',
        ]
    },
    {
        id: "message-9",
        urls: [
            'https://script.google.com/macros/s/AKfycbwCGm81MNBzD7hj9oIpEYgF7ZpAIW1axLtVLYumn4fkflrXU43t4I9yg04_hBFBWXkDtA/exec',
            'https://script.google.com/macros/s/AKfycbyheY2zZ8JPXKGDvRVI8c3mRZBIAOy9QlAttUbGEDccyudefod4gd39_XfHC5Wjxakd/exec',
            '',
        ]
    },
    {
        id: "message-10",
        urls: [
            'https://script.google.com/macros/s/AKfycbx2pimgFKj2_DGvvUFitzuW6XYTWleE8wlipUSbBd6maKk_eja6wXFUHC5KFpRm7Dgn/exec',
            'https://script.google.com/macros/s/AKfycbyABhOmjScX-zhD5JH9vpSc9x2-9kfu-b0OqdezQGcku-02aY4s1kDY9eDPHZA5hbvITw/exec',
            '',
        ]
    },
    {
        id: "message-11",
        messages: [
            'アドレス３',
            'アドレス１０',
            'アドレス１７',
        ]
    },
    {
        id: "message-12",
        messages: [
            'ーー番教室',
            '未入力',
            'XX番教室',
        ]
    },
    {
        id: "message-13",
        urls: [
            'https://script.google.com/macros/s/AKfycbwwaQeeGHQ-7a4ZRhphFnnWUAH2cLH4l_-qh11_uCv7Vi-ZPTKhH91ChEuNmt09uV8aVQ/exec',
            '',
            '',
        ]
    },
    {
        id: "message-14",
        urls: [
            'https://script.google.com/macros/s/AKfycbwCGm81MNBzD7hj9oIpEYgF7ZpAIW1axLtVLYumn4fkflrXU43t4I9yg04_hBFBWXkDtA/exec',
            '',
            '',
        ]
    },
    {
        id: "message-15",
        urls: [
            'https://script.google.com/macros/s/AKfycbx2pimgFKj2_DGvvUFitzuW6XYTWleE8wlipUSbBd6maKk_eja6wXFUHC5KFpRm7Dgn/exec',
            '',
            '',
        ]
    },
    {
        id: "message-16",
        messages: [
            'アドレス４',
            'アドレス１１',
            'アドレス１８',
        ]
    },
    {
        id: "message-17",
        messages: [
            '◆◆番教室',
            'ーー番教室',
            '未入力',
        ]
    },
    {
        id: "message-18",
        urls: [
            'https://script.google.com/macros/s/AKfycbwwaQeeGHQ-7a4ZRhphFnnWUAH2cLH4l_-qh11_uCv7Vi-ZPTKhH91ChEuNmt09uV8aVQ/exec',
            'https://script.google.com/macros/s/AKfycbwIJpL5YD1wdOQ_9JyPWyl4nOeJ8MjhfjTM6ZBxDUJC0c_sqiA39hySZ4HSBQgBXKH6uw/exec',
            '',
        ]
    },
    {
        id: "message-19",
        urls: [
            'https://script.google.com/macros/s/AKfycbwCGm81MNBzD7hj9oIpEYgF7ZpAIW1axLtVLYumn4fkflrXU43t4I9yg04_hBFBWXkDtA/exec',
            'https://script.google.com/macros/s/AKfycbyheY2zZ8JPXKGDvRVI8c3mRZBIAOy9QlAttUbGEDccyudefod4gd39_XfHC5Wjxakd/exec',
            '',
        ]
    },
    {
        id: "message-20",
        urls: [
            'https://script.google.com/macros/s/AKfycbx2pimgFKj2_DGvvUFitzuW6XYTWleE8wlipUSbBd6maKk_eja6wXFUHC5KFpRm7Dgn/exec',
            'https://script.google.com/macros/s/AKfycbyABhOmjScX-zhD5JH9vpSc9x2-9kfu-b0OqdezQGcku-02aY4s1kDY9eDPHZA5hbvITw/exec',
            '',
        ]
    },
];

const bgColors = ['black'];
let messagesList = {}; // 各メッセージ枠のデータ
let maxLength = 0; // 最大メッセージ数（すべての枠で同期するため）

function fetchData() {
    let fetchPromises = dataSets.map(dataSet => {
        if (dataSet.messages) {
            // 直接メッセージを使用するケース
            messagesList[dataSet.id] = dataSet.messages;
            maxLength = Math.max(maxLength, messagesList[dataSet.id].length);
            return Promise.resolve();
        } else {
            // URL からデータを取得するケース
            return Promise.all(dataSet.urls.map(url =>
                fetch(url)
                    .then(response => response.text())
                    .then(data => data.split(','))
                    .catch(error => {
                        console.error(`Error fetching data from ${url}:`, error);
                        return [];
                    })
            )).then(results => {
                messagesList[dataSet.id] = results.flat();
                maxLength = Math.max(maxLength, messagesList[dataSet.id].length);
            });
        }
    });

    Promise.all(fetchPromises).then(() => {
        setTimeout(startMessageRotation, 20000); // **20秒待ってから開始**
    });
}

function startMessageRotation() {
    let i = 0;

    function updateMessages() {
        dataSets.forEach((dataSet, index) => {
            const messageElement = document.getElementById(dataSet.id);
            const messages = messagesList[dataSet.id];
            if (messages.length > 0) {
                messageElement.textContent = messages[i % messages.length];
                messageElement.style.backgroundColor = bgColors[i % bgColors.length];
            } else {
                messageElement.textContent = ' ';
            }
        });

        i++;
    }

    updateMessages(); // 最初の更新（20秒後）
    setInterval(updateMessages, 20000); // その後20秒ごとに更新
}

fetchData();
setInterval(fetchData, 60000); // **1分ごとにデータを更新**
