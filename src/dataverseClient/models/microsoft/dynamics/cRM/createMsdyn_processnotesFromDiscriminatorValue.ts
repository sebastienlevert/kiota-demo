import {Msdyn_processnotes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_processnotesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_processnotes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_processnotes();
}
