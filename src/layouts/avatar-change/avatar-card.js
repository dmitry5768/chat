export default function avatarChange({fn}) {
    // language=hbs
    
    return `
        <div id="avatar-change" class="avatar-card">
        
            ${fn(this)}
        </div>
    `
}