export default function card({fn}) {
    // language=hbs
    
    return `
        <div class="card" id="card">
            ${fn(this)}
        </div>
    `
}