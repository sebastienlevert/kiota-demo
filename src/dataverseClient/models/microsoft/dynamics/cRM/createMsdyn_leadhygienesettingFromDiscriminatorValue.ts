import {Msdyn_leadhygienesetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_leadhygienesettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_leadhygienesetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_leadhygienesetting();
}
