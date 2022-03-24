import {Msdyn_ocrecording} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocrecordingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocrecording {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocrecording();
}
