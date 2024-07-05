const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const jokes = [
    { id: 1,
        setup: 'Vigyanikon ko parmanuon par bharosa kyon nahin hota?', 
        punchline: 'Kyonki ve sab kuch bana dete hain!' 
    },

    { id: 2, 
        setup: 'Kisan ne puraskar kyon jeeta?',
        punchline: 'Kyonki vah apne kshetra mein utkrasht tha!'
    },

    { id: 3,
        setup: 'Kankal ek doosre se kyon nahin ladte?',
        punchline: 'Unmein sahas nahin hota.'
    },

    { id: 4,
        setup: 'Nakli spaghetti ko kya kehte hain?',
        punchline: 'Ek impasta!'
    },

    { id: 5, 
        setup: 'Octopus ko hansane ke liye kitni gudgudi karni padti hai?',
        punchline: 'Dus tickle!'
    },

    { id: 6,
        setup: 'Ganit ki kitaab udaas kyon thi?',
        punchline: 'Kyonki usmein bahut saari samasyaen thi.'
    },

    { id: 7, 
        setup: 'Aise cheese ko kya kehte hain jo aapki nahin hai?', 
        punchline: 'Nacho cheese!' 
    },

    { id: 8,
        setup: 'Cycle khud se kyon nahin khadi ho paati?',
        punchline: 'Kyonki vah do-thaki hui thi!'
    },

    { id: 9,
        setup: 'Ek snowman aur ek vampire ko milane par kya milta hai?',
        punchline: 'Frostbite!'
    },

    { id: 10,
        setup: 'Gaayon ke paas pair ki jagah khur kyon hote hain?',
        punchline: 'Kyonki ve lactose nahin karte.'
    }
];

const images = [
    { id: 1, 
        url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxfHx8fHx8fHwxNjI3ODk5NTk4&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { id: 2, 
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxMHx8fHx8fHwxNjI3ODk5NjE0&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { id: 3, 
        url: 'https://images.unsplash.com/photo-1514515877900-9a49ce5d55f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxMXx8fHx8fHwxNjI3ODk5NjMw&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { id: 4, 
        url: 'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxMnx8fHx8fHwxNjI3ODk5NjQx&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { id: 5, 
        url: 'https://images.unsplash.com/photo-1540206395-68808572332f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxM3x8fHx8fHwxNjI3ODk5NjY0&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { id: 6, 
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxNHx8fHx8fHwxNjI3ODk5NjY3&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { id: 7, 
        url: 'https://images.unsplash.com/photo-1511485977113-f34b61cded9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxNXx8fHx8fHwxNjI3ODk5NjY5&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { id: 8, 
        url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxNnx8fHx8fHwxNjI3ODk5Njcz&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { id: 9, 
        url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxN3x8fHx8fHwxNjI3ODk5Njc3&ixlib=rb-1.2.1&q=80&w=400' 
    },
    { id: 10, 
        url: 'https://images.unsplash.com/photo-1549298916-84c1c865d5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjg1NzR8MHwxfGFsbHwxOHx8fHx8fHwxNjI3ODk5Njc5&ixlib=rb-1.2.1&q=80&w=400' 
    }
];


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Random Jokes and Images API');
});

app.get('/api/jokes/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
});

app.get('/api/images/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    res.json(images[randomIndex]);
});

app.get('/api/jokes-and-images/random', (req, res) => {
    const randomJokeIndex = Math.floor(Math.random() * jokes.length);
    const randomImageIndex = Math.floor(Math.random() * images.length);
    res.json({
        joke: jokes[randomJokeIndex],
        image: images[randomImageIndex]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
