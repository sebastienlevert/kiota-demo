import {BookableresourcebookingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookableresourcebookingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookableresourcebookingCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookableresourcebookingCollectionResponse();
}
