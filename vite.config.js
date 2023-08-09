import {resolve} from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import card from "./src/layouts/card/card";

import profile from "./src/layouts/profile-container/profile-container";
import avatarChange from "./src/layouts/avatar-change/avatar-card";

 export default defineConfig({
    
    build: {
        outDir:resolve(__dirname, 'dist'),
    },
    plugins: [handlebars(
        {
            partialDirectory: resolve(__dirname,"src\\partials"),
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