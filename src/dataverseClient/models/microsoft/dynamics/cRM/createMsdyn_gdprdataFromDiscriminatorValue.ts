import {Msdyn_gdprdata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_gdprdataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_gdprdata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_gdprdata();
}
