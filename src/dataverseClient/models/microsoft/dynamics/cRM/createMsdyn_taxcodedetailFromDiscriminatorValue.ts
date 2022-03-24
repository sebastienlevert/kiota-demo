import {Msdyn_taxcodedetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_taxcodedetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_taxcodedetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_taxcodedetail();
}
