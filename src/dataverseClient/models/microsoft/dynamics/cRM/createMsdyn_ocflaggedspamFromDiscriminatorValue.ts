import {Msdyn_ocflaggedspam} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocflaggedspamFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocflaggedspam {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocflaggedspam();
}
