import {Bookableresourcebookingheader} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookableresourcebookingheaderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bookableresourcebookingheader {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bookableresourcebookingheader();
}
