import {Msdyn_resourcecategorypricelevel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resourcecategorypricelevelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resourcecategorypricelevel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resourcecategorypricelevel();
}
