import {Msdyn_notesanalysisconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_notesanalysisconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_notesanalysisconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_notesanalysisconfig();
}
