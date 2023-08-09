export default function profile({fn}){
    return `
        <div class="profile-container">
            ${fn(this)}
        </div>
    `
}


