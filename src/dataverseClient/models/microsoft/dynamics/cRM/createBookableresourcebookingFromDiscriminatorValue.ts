import {Bookableresourcebooking} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookableresourcebookingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bookableresourcebooking {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bookableresourcebooking();
}
