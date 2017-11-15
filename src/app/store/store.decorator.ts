export function Store(value:any) {
    
    return function(target: any, propertyKey: string | symbol) {
        target["__unsubscribe_from_store"] = null
        
        const originalNgOnDestroy = target.ngOnDestroy || function (){}
        const originalNgOnInit = target.ngOnInit || function (){}

        const ngOnDestroy = function() {   
            originalNgOnDestroy.apply(this, arguments)
            target["__unsubscribe_from_store"]()
            console.log("Destroy")
        }
            
        const ngOnInit = function() {   
            originalNgOnInit.apply(this, arguments)
            let interalStore = value
            target[propertyKey] = interalStore.getState()
            target["__unsubscribe_from_store"] = interalStore.subscribe(() => {
                target[propertyKey] = interalStore.getState()
            })
            console.log("Create")
        }

        target.ngOnInit = ngOnInit
        target.ngOnDestroy = ngOnDestroy   
    }
 
 }