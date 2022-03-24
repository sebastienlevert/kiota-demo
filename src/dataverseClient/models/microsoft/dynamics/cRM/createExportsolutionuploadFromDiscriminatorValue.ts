import {Exportsolutionupload} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportsolutionuploadFromDiscriminatorValue(parseNode: ParseNode | undefined) : Exportsolutionupload {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Exportsolutionupload();
}
