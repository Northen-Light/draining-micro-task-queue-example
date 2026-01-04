// unless you use src tag in script, defer won't work
// defer don't work on inline scripts

setTimeout(() => {
    console.log('macro-task-queue-cb-1');
    queueMicrotask(() => console.log('micro-task-queue-cb-1000'));
}, 0);

setTimeout(() => console.log('macro-task-queue-cb-2'), 0);

/*
* Draining microtasks amortizes the native-to-JS entry cost,
* improves cache locality, prevents stack blowups from recursive
* microtasks, and enforces deterministic scheduling — all of which
* significantly improve performance.
* */
for (let i = 0; i < 1000; i++) queueMicrotask(() => console.log(`micro-task-queue-cb-${i}`));

const a = new Array(100000).fill(1000);

console.log(a);
