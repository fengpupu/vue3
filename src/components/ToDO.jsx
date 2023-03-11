import { defineComponent, ref,onMounted } from "vue";
export default defineComponent({
    setup(props) {
        let title = ref("")
        let todos = ref([{ title: '学习', done: true }, { title: '睡觉', done: false }])
        function addToDo() {
            todos.value.push({
                title: title.value
            })
            title.value = ""
        }
        onMounted(()=>{
            console.log('mounted',props)
        })
        return () =>
            <div>
                <input type="text" vModel={title.value}></input>
                <button onClick={addToDo}>add</button>
                <ul>
                    {
                        todos.value.length ? todos.value.map(todo => {
                            return <li>
                                {todo.title}
                            </li>
                        }) : <li>no data</li>
                    }
                </ul>
            </div>
    }
})