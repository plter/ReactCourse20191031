import dynamic from 'umi/dynamic';

const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
const UCenter = dynamic({
    loader: async function () {
        await delay(/* 1s */3000);
        return () => <div>I will render after 1s</div>;
    },
});

export default UCenter