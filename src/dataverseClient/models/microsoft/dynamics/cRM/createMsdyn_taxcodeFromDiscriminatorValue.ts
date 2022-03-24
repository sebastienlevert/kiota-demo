import {Msdyn_taxcode} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_taxcodeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_taxcode {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_taxcode();
}
