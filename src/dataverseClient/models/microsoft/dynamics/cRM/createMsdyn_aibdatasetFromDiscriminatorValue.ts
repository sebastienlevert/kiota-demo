import {Msdyn_aibdataset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aibdatasetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aibdataset {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aibdataset();
}
