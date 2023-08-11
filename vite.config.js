import {resolve} from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import card from "./src/layouts/card/card";

import profile from "./src/layouts/profile-container/profile-container";
import avatarChange from "./src/layouts/avatar-change/avatar-card";

 export default defineConfig({
    
    build: {
        rollupOptions:{
            input: {
                index: resolve(__dirname,'index.html'),
                login: resolve(__dirname, 'src/pages/login/login.html'),
                signup: resolve(__dirname, 'src/pages/signup/signup.html'),
                chat: resolve(__dirname, 'src/pages/chat/chat.html'),
                404: resolve(__dirname, 'src/pages/errors/404.html'),
                500: resolve(__dirname, 'src/pages/errors/500.html'),
                profileedit: resolve(__dirname, 'src/pages/profile/profile-edit.html'),
                profilepasswordchange: resolve(__dirname, 'src/pages/profile/profile-password-change.html'),
                profile: resolve(__dirname, 'src/pages/profile/profile.html')
            }
        }
        // outDir:resolve(__dirname, 'dist'),
    },
    plugins: [handlebars(
        {
            partialDirectory: resolve(__dirname,'src','partials'),
            helpers: {
                card,profile,avatarChange
        
            },
            context:{
                firstname: 'John',
                lastname: 'Deere',
                username: 'john_deer99',
                chatname:'John',
                email: 'john_deer99@gmail.com',
                phone: '+7 (909) 967 30 30'
            }
           
        }
    ) ]
}
)