function printHello(){
    console.log("hello!");
}
function printBye(){
    console.log("bye!");
}
function onDblClick(){
    console.log("on double click");
}


export default function Button(){
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printBye}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eius, maxime deleniti enim quo corrupti nesciunt fugiat perspiciatis recusandae. Rem reiciendis quod pariatur necessitatibus perferendis excepturi sed expedita, animi facilis?
            </p>
            <button onDoubleClick={onDblClick}>double click me!</button>
        </div>
    );
}