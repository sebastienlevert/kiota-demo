import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSalesliteratureFromDiscriminatorValue} from './createSalesliteratureFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Salesliterature, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Salesliteratureitem extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __salesliteratureid_value?: string | undefined;
    private _abstract?: string | undefined;
    private _attacheddocumenturl?: string | undefined;
    private _authorname?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _documentbody?: string | undefined;
    private _documentbody_binary?: string | undefined;
    private _filename?: string | undefined;
    private _filesize?: number | undefined;
    private _filetypecode?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomerviewable?: boolean | undefined;
    private _keywords?: string | undefined;
    private _mimetype?: string | undefined;
    private _mode?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _salesliteratureid?: Salesliterature | undefined;
    private _salesLiteratureItem_AsyncOperations?: Asyncoperation[] | undefined;
    private _salesLiteratureItem_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _salesliteratureitem_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _salesliteratureitem_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _salesLiteratureItem_ProcessSessions?: Processsession[] | undefined;
    private _salesliteratureitem_SyncErrors?: Syncerror[] | undefined;
    private _salesliteratureitemid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _title?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _salesliteratureid_value property value. 
     * @returns a string
     */
    public get _salesliteratureid_value() {
        return this.__salesliteratureid_value;
    };
    /**
     * Sets the _salesliteratureid_value property value. 
     * @param value Value to set for the _salesliteratureid_value property.
     */
    public set _salesliteratureid_value(value: string | undefined) {
        this.__salesliteratureid_value = value;
    };
    /**
     * Gets the abstract property value. 
     * @returns a string
     */
    public get abstract() {
        return this._abstract;
    };
    /**
     * Sets the abstract property value. 
     * @param value Value to set for the abstract property.
     */
    public set abstract(value: string | undefined) {
        this._abstract = value;
    };
    /**
     * Gets the attacheddocumenturl property value. 
     * @returns a string
     */
    public get attacheddocumenturl() {
        return this._attacheddocumenturl;
    };
    /**
     * Sets the attacheddocumenturl property value. 
     * @param value Value to set for the attacheddocumenturl property.
     */
    public set attacheddocumenturl(value: string | undefined) {
        this._attacheddocumenturl = value;
    };
    /**
     * Gets the authorname property value. 
     * @returns a string
     */
    public get authorname() {
        return this._authorname;
    };
    /**
     * Sets the authorname property value. 
     * @param value Value to set for the authorname property.
     */
    public set authorname(value: string | undefined) {
        this._authorname = value;
    };
    /**
     * Instantiates a new salesliteratureitem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the documentbody property value. 
     * @returns a string
     */
    public get documentbody() {
        return this._documentbody;
    };
    /**
     * Sets the documentbody property value. 
     * @param value Value to set for the documentbody property.
     */
    public set documentbody(value: string | undefined) {
        this._documentbody = value;
    };
    /**
     * Gets the documentbody_binary property value. 
     * @returns a binary
     */
    public get documentbody_binary() {
        return this._documentbody_binary;
    };
    /**
     * Sets the documentbody_binary property value. 
     * @param value Value to set for the documentbody_binary property.
     */
    public set documentbody_binary(value: string | undefined) {
        this._documentbody_binary = value;
    };
    /**
     * Gets the filename property value. 
     * @returns a string
     */
    public get filename() {
        return this._filename;
    };
    /**
     * Sets the filename property value. 
     * @param value Value to set for the filename property.
     */
    public set filename(value: string | undefined) {
        this._filename = value;
    };
    /**
     * Gets the filesize property value. 
     * @returns a integer
     */
    public get filesize() {
        return this._filesize;
    };
    /**
     * Sets the filesize property value. 
     * @param value Value to set for the filesize property.
     */
    public set filesize(value: number | undefined) {
        this._filesize = value;
    };
    /**
     * Gets the filetypecode property value. 
     * @returns a integer
     */
    public get filetypecode() {
        return this._filetypecode;
    };
    /**
     * Sets the filetypecode property value. 
     * @param value Value to set for the filetypecode property.
     */
    public set filetypecode(value: number | undefined) {
        this._filetypecode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Salesliteratureitem)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Salesliteratureitem)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Salesliteratureitem)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Salesliteratureitem)._modifiedonbehalfby_value = n.getStringValue(); },
            "_salesliteratureid_value": (o, n) => { (o as unknown as Salesliteratureitem)._salesliteratureid_value = n.getStringValue(); },
            "abstract": (o, n) => { (o as unknown as Salesliteratureitem).abstract = n.getStringValue(); },
            "attacheddocumenturl": (o, n) => { (o as unknown as Salesliteratureitem).attacheddocumenturl = n.getStringValue(); },
            "authorname": (o, n) => { (o as unknown as Salesliteratureitem).authorname = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Salesliteratureitem).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Salesliteratureitem).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Salesliteratureitem).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "documentbody": (o, n) => { (o as unknown as Salesliteratureitem).documentbody = n.getStringValue(); },
            "documentbody_binary": (o, n) => { (o as unknown as Salesliteratureitem).documentbody_binary = n.getStringValue(); },
            "filename": (o, n) => { (o as unknown as Salesliteratureitem).filename = n.getStringValue(); },
            "filesize": (o, n) => { (o as unknown as Salesliteratureitem).filesize = n.getNumberValue(); },
            "filetypecode": (o, n) => { (o as unknown as Salesliteratureitem).filetypecode = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Salesliteratureitem).importsequencenumber = n.getNumberValue(); },
            "iscustomerviewable": (o, n) => { (o as unknown as Salesliteratureitem).iscustomerviewable = n.getBooleanValue(); },
            "keywords": (o, n) => { (o as unknown as Salesliteratureitem).keywords = n.getStringValue(); },
            "mimetype": (o, n) => { (o as unknown as Salesliteratureitem).mimetype = n.getStringValue(); },
            "mode": (o, n) => { (o as unknown as Salesliteratureitem).mode = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Salesliteratureitem).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Salesliteratureitem).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Salesliteratureitem).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Salesliteratureitem).organizationid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Salesliteratureitem).overriddencreatedon = n.getDateValue(); },
            "salesliteratureid": (o, n) => { (o as unknown as Salesliteratureitem).salesliteratureid = n.getObjectValue<Salesliterature>(createSalesliteratureFromDiscriminatorValue); },
            "salesLiteratureItem_AsyncOperations": (o, n) => { (o as unknown as Salesliteratureitem).salesLiteratureItem_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "salesLiteratureItem_BulkDeleteFailures": (o, n) => { (o as unknown as Salesliteratureitem).salesLiteratureItem_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "salesliteratureitem_MailboxTrackingFolders": (o, n) => { (o as unknown as Salesliteratureitem).salesliteratureitem_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "salesliteratureitem_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Salesliteratureitem).salesliteratureitem_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "salesLiteratureItem_ProcessSessions": (o, n) => { (o as unknown as Salesliteratureitem).salesLiteratureItem_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "salesliteratureitem_SyncErrors": (o, n) => { (o as unknown as Salesliteratureitem).salesliteratureitem_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "salesliteratureitemid": (o, n) => { (o as unknown as Salesliteratureitem).salesliteratureitemid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Salesliteratureitem).timezoneruleversionnumber = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Salesliteratureitem).title = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Salesliteratureitem).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Salesliteratureitem).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the iscustomerviewable property value. 
     * @returns a boolean
     */
    public get iscustomerviewable() {
        return this._iscustomerviewable;
    };
    /**
     * Sets the iscustomerviewable property value. 
     * @param value Value to set for the iscustomerviewable property.
     */
    public set iscustomerviewable(value: boolean | undefined) {
        this._iscustomerviewable = value;
    };
    /**
     * Gets the keywords property value. 
     * @returns a string
     */
    public get keywords() {
        return this._keywords;
    };
    /**
     * Sets the keywords property value. 
     * @param value Value to set for the keywords property.
     */
    public set keywords(value: string | undefined) {
        this._keywords = value;
    };
    /**
     * Gets the mimetype property value. 
     * @returns a string
     */
    public get mimetype() {
        return this._mimetype;
    };
    /**
     * Sets the mimetype property value. 
     * @param value Value to set for the mimetype property.
     */
    public set mimetype(value: string | undefined) {
        this._mimetype = value;
    };
    /**
     * Gets the mode property value. 
     * @returns a string
     */
    public get mode() {
        return this._mode;
    };
    /**
     * Sets the mode property value. 
     * @param value Value to set for the mode property.
     */
    public set mode(value: string | undefined) {
        this._mode = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a string
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: string | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the salesliteratureid property value. 
     * @returns a salesliterature
     */
    public get salesliteratureid() {
        return this._salesliteratureid;
    };
    /**
     * Sets the salesliteratureid property value. 
     * @param value Value to set for the salesliteratureid property.
     */
    public set salesliteratureid(value: Salesliterature | undefined) {
        this._salesliteratureid = value;
    };
    /**
     * Gets the salesLiteratureItem_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get salesLiteratureItem_AsyncOperations() {
        return this._salesLiteratureItem_AsyncOperations;
    };
    /**
     * Sets the salesLiteratureItem_AsyncOperations property value. 
     * @param value Value to set for the SalesLiteratureItem_AsyncOperations property.
     */
    public set salesLiteratureItem_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._salesLiteratureItem_AsyncOperations = value;
    };
    /**
     * Gets the salesLiteratureItem_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get salesLiteratureItem_BulkDeleteFailures() {
        return this._salesLiteratureItem_BulkDeleteFailures;
    };
    /**
     * Sets the salesLiteratureItem_BulkDeleteFailures property value. 
     * @param value Value to set for the SalesLiteratureItem_BulkDeleteFailures property.
     */
    public set salesLiteratureItem_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._salesLiteratureItem_BulkDeleteFailures = value;
    };
    /**
     * Gets the salesliteratureitem_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get salesliteratureitem_MailboxTrackingFolders() {
        return this._salesliteratureitem_MailboxTrackingFolders;
    };
    /**
     * Sets the salesliteratureitem_MailboxTrackingFolders property value. 
     * @param value Value to set for the salesliteratureitem_MailboxTrackingFolders property.
     */
    public set salesliteratureitem_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._salesliteratureitem_MailboxTrackingFolders = value;
    };
    /**
     * Gets the salesliteratureitem_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get salesliteratureitem_PrincipalObjectAttributeAccesses() {
        return this._salesliteratureitem_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the salesliteratureitem_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the salesliteratureitem_PrincipalObjectAttributeAccesses property.
     */
    public set salesliteratureitem_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._salesliteratureitem_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the salesLiteratureItem_ProcessSessions property value. 
     * @returns a processsession
     */
    public get salesLiteratureItem_ProcessSessions() {
        return this._salesLiteratureItem_ProcessSessions;
    };
    /**
     * Sets the salesLiteratureItem_ProcessSessions property value. 
     * @param value Value to set for the SalesLiteratureItem_ProcessSessions property.
     */
    public set salesLiteratureItem_ProcessSessions(value: Processsession[] | undefined) {
        this._salesLiteratureItem_ProcessSessions = value;
    };
    /**
     * Gets the salesliteratureitem_SyncErrors property value. 
     * @returns a syncerror
     */
    public get salesliteratureitem_SyncErrors() {
        return this._salesliteratureitem_SyncErrors;
    };
    /**
     * Sets the salesliteratureitem_SyncErrors property value. 
     * @param value Value to set for the salesliteratureitem_SyncErrors property.
     */
    public set salesliteratureitem_SyncErrors(value: Syncerror[] | undefined) {
        this._salesliteratureitem_SyncErrors = value;
    };
    /**
     * Gets the salesliteratureitemid property value. 
     * @returns a string
     */
    public get salesliteratureitemid() {
        return this._salesliteratureitemid;
    };
    /**
     * Sets the salesliteratureitemid property value. 
     * @param value Value to set for the salesliteratureitemid property.
     */
    public set salesliteratureitemid(value: string | undefined) {
        this._salesliteratureitemid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_salesliteratureid_value", this._salesliteratureid_value);
        writer.writeStringValue("abstract", this.abstract);
        writer.writeStringValue("attacheddocumenturl", this.attacheddocumenturl);
        writer.writeStringValue("authorname", this.authorname);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("documentbody", this.documentbody);
        writer.writeStringValue("documentbody_binary", this.documentbody_binary);
        writer.writeStringValue("filename", this.filename);
        writer.writeNumberValue("filesize", this.filesize);
        writer.writeNumberValue("filetypecode", this.filetypecode);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("iscustomerviewable", this.iscustomerviewable);
        writer.writeStringValue("keywords", this.keywords);
        writer.writeStringValue("mimetype", this.mimetype);
        writer.writeStringValue("mode", this.mode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Salesliterature>("salesliteratureid", this.salesliteratureid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("salesLiteratureItem_AsyncOperations", this.salesLiteratureItem_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("salesLiteratureItem_BulkDeleteFailures", this.salesLiteratureItem_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("salesliteratureitem_MailboxTrackingFolders", this.salesliteratureitem_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("salesliteratureitem_PrincipalObjectAttributeAccesses", this.salesliteratureitem_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("salesLiteratureItem_ProcessSessions", this.salesLiteratureItem_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("salesliteratureitem_SyncErrors", this.salesliteratureitem_SyncErrors);
        writer.writeStringValue("salesliteratureitemid", this.salesliteratureitemid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
