import {Msdyn_soundfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_soundfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_soundfile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_soundfile();
}
