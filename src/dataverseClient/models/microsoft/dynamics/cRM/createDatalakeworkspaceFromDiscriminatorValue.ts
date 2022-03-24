import {Datalakeworkspace} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDatalakeworkspaceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Datalakeworkspace {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Datalakeworkspace();
}
