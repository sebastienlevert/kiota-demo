import {Importlog} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportlogFromDiscriminatorValue(parseNode: ParseNode | undefined) : Importlog {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Importlog();
}
