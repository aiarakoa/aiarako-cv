import {useEffect, useRef} from 'react';

export function useReCenterActive(selector, reCenterBehaviour, trigger) {
    const ref = useRef(null);

    useEffect(() => {
        if (!trigger) return;

        const scroller = ref.current;
        if (!scroller) return;

        const active = scroller.querySelector(selector);
        if (!active) return;

//        console.log(`${selector} - ${reCenterBehaviour} - ${trigger}`);

        active.parentElement.scrollIntoView({ behavior: reCenterBehaviour, inline: 'center', block: 'nearest' });
    }, [trigger, selector, reCenterBehaviour]);

    return ref;
}