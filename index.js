// unless you use src tag in script, defer won't work
// defer don't work on inline scripts

setTimeout(() => {
    console.log('macro-task-queue-cb-1');
    queueMicrotask(() => console.log('micro-task-queue-cb-1000'));
}, 0);

setTimeout(() => console.log('macro-task-queue-cb-2'), 0);

/*
* Draining microtasks amortizes the native-to-JS entry cost and also improves few others parameteres
* (which needs to checked), thus improves performance overall.
* */
for (let i = 0; i < 1000; i++) queueMicrotask(() => console.log(`micro-task-queue-cb-${i}`));

const a = new Array(100000).fill(1000);

console.log(a);
