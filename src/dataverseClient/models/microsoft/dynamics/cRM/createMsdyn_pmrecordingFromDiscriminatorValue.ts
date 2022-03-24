import {Msdyn_pmrecording} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_pmrecordingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_pmrecording {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_pmrecording();
}
