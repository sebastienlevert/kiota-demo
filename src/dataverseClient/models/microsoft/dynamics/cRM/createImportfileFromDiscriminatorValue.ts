import {Importfile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportfileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Importfile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Importfile();
}
