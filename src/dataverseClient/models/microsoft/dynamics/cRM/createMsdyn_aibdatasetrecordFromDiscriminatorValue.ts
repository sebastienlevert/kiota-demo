import {Msdyn_aibdatasetrecord} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aibdatasetrecordFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aibdatasetrecord {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aibdatasetrecord();
}
