import {Msdyn_customerasset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_customerassetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_customerasset {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_customerasset();
}
