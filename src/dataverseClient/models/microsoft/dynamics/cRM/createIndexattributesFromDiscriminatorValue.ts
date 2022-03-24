import {Indexattributes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIndexattributesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Indexattributes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Indexattributes();
}
