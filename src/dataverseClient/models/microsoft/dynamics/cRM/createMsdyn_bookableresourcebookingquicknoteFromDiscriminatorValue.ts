import {Msdyn_bookableresourcebookingquicknote} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_bookableresourcebookingquicknoteFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_bookableresourcebookingquicknote {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_bookableresourcebookingquicknote();
}
