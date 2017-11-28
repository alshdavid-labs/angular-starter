export function Store(value?:any) {
    console.log(value)
    return function(target: any, propertyKey: string | symbol) {
        target["__unsubscribe_from_store"] = null
        target[propertyKey] = null

        if (!target.ngOnDestroy) {
            console.error("Please include ngOnDestroy on: " + target['constructor']['name'])
        }

        if (!target.ngOnInit) {
            console.error("Please include ngOnInit on: " + target['constructor']['name'])
        }

        console.log(target)
        
        const originalNgOnDestroy = target.ngOnDestroy || function (){}
        const originalNgOnInit = target.ngOnInit || function (){}

        const ngOnDestroy = function() {   
            originalNgOnDestroy.apply(this, arguments)
            target["__unsubscribe_from_store"]()
        }
            
        const ngOnInit = function() {   
            console.log(value)
            originalNgOnInit.apply(this, arguments)
            let interalStore = value //|| store
            target[propertyKey] = interalStore.getState()
            target["__unsubscribe_from_store"] = interalStore.subscribe(() => {
                target[propertyKey] = interalStore.getState()
            })
        }

        target.ngOnInit = ngOnInit
        target.ngOnDestroy = ngOnDestroy   
    }
 
 }