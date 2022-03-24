import {Msdyn_aibdatasetfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aibdatasetfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aibdatasetfile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aibdatasetfile();
}
