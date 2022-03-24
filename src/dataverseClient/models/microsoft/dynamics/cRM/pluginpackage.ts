import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPluginassemblyFromDiscriminatorValue} from './createPluginassemblyFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Fileattachment, Mailboxtrackingfolder, Organization, Pluginassembly, Principalobjectattributeaccess, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Pluginpackage extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _content?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _fileid?: string | undefined;
    private _fileid_name?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _pluginpackage_AsyncOperations?: Asyncoperation[] | undefined;
    private _pluginpackage_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _pluginpackage_FileAttachments?: Fileattachment[] | undefined;
    private _pluginpackage_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _pluginpackage_pluginassembly?: Pluginassembly[] | undefined;
    private _pluginpackage_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _pluginpackage_SyncErrors?: Syncerror[] | undefined;
    private _pluginpackageid?: string | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uniquename?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _version?: string | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new pluginpackage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. 
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. 
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
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
     * Gets the fileid property value. 
     * @returns a binary
     */
    public get fileid() {
        return this._fileid;
    };
    /**
     * Sets the fileid property value. 
     * @param value Value to set for the fileid property.
     */
    public set fileid(value: string | undefined) {
        this._fileid = value;
    };
    /**
     * Gets the fileid_name property value. 
     * @returns a string
     */
    public get fileid_name() {
        return this._fileid_name;
    };
    /**
     * Sets the fileid_name property value. 
     * @param value Value to set for the fileid_name property.
     */
    public set fileid_name(value: string | undefined) {
        this._fileid_name = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Pluginpackage)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Pluginpackage)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Pluginpackage)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Pluginpackage)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Pluginpackage)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Pluginpackage).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Pluginpackage).componentstate = n.getNumberValue(); },
            "content": (o, n) => { (o as unknown as Pluginpackage).content = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Pluginpackage).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Pluginpackage).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Pluginpackage).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "fileid": (o, n) => { (o as unknown as Pluginpackage).fileid = n.getStringValue(); },
            "fileid_name": (o, n) => { (o as unknown as Pluginpackage).fileid_name = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Pluginpackage).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Pluginpackage).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Pluginpackage).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Pluginpackage).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Pluginpackage).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Pluginpackage).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Pluginpackage).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Pluginpackage).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Pluginpackage).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Pluginpackage).overwritetime = n.getDateValue(); },
            "pluginpackage_AsyncOperations": (o, n) => { (o as unknown as Pluginpackage).pluginpackage_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "pluginpackage_BulkDeleteFailures": (o, n) => { (o as unknown as Pluginpackage).pluginpackage_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "pluginpackage_FileAttachments": (o, n) => { (o as unknown as Pluginpackage).pluginpackage_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "pluginpackage_MailboxTrackingFolders": (o, n) => { (o as unknown as Pluginpackage).pluginpackage_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "pluginpackage_pluginassembly": (o, n) => { (o as unknown as Pluginpackage).pluginpackage_pluginassembly = n.getCollectionOfObjectValues<Pluginassembly>(createPluginassemblyFromDiscriminatorValue); },
            "pluginpackage_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Pluginpackage).pluginpackage_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "pluginpackage_SyncErrors": (o, n) => { (o as unknown as Pluginpackage).pluginpackage_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "pluginpackageid": (o, n) => { (o as unknown as Pluginpackage).pluginpackageid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Pluginpackage).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Pluginpackage).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Pluginpackage).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Pluginpackage).timezoneruleversionnumber = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Pluginpackage).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Pluginpackage).utcconversiontimezonecode = n.getNumberValue(); },
            "version": (o, n) => { (o as unknown as Pluginpackage).version = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Pluginpackage).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the pluginpackage_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get pluginpackage_AsyncOperations() {
        return this._pluginpackage_AsyncOperations;
    };
    /**
     * Sets the pluginpackage_AsyncOperations property value. 
     * @param value Value to set for the pluginpackage_AsyncOperations property.
     */
    public set pluginpackage_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._pluginpackage_AsyncOperations = value;
    };
    /**
     * Gets the pluginpackage_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get pluginpackage_BulkDeleteFailures() {
        return this._pluginpackage_BulkDeleteFailures;
    };
    /**
     * Sets the pluginpackage_BulkDeleteFailures property value. 
     * @param value Value to set for the pluginpackage_BulkDeleteFailures property.
     */
    public set pluginpackage_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._pluginpackage_BulkDeleteFailures = value;
    };
    /**
     * Gets the pluginpackage_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get pluginpackage_FileAttachments() {
        return this._pluginpackage_FileAttachments;
    };
    /**
     * Sets the pluginpackage_FileAttachments property value. 
     * @param value Value to set for the pluginpackage_FileAttachments property.
     */
    public set pluginpackage_FileAttachments(value: Fileattachment[] | undefined) {
        this._pluginpackage_FileAttachments = value;
    };
    /**
     * Gets the pluginpackage_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get pluginpackage_MailboxTrackingFolders() {
        return this._pluginpackage_MailboxTrackingFolders;
    };
    /**
     * Sets the pluginpackage_MailboxTrackingFolders property value. 
     * @param value Value to set for the pluginpackage_MailboxTrackingFolders property.
     */
    public set pluginpackage_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._pluginpackage_MailboxTrackingFolders = value;
    };
    /**
     * Gets the pluginpackage_pluginassembly property value. 
     * @returns a pluginassembly
     */
    public get pluginpackage_pluginassembly() {
        return this._pluginpackage_pluginassembly;
    };
    /**
     * Sets the pluginpackage_pluginassembly property value. 
     * @param value Value to set for the pluginpackage_pluginassembly property.
     */
    public set pluginpackage_pluginassembly(value: Pluginassembly[] | undefined) {
        this._pluginpackage_pluginassembly = value;
    };
    /**
     * Gets the pluginpackage_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get pluginpackage_PrincipalObjectAttributeAccesses() {
        return this._pluginpackage_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the pluginpackage_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the pluginpackage_PrincipalObjectAttributeAccesses property.
     */
    public set pluginpackage_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._pluginpackage_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the pluginpackage_SyncErrors property value. 
     * @returns a syncerror
     */
    public get pluginpackage_SyncErrors() {
        return this._pluginpackage_SyncErrors;
    };
    /**
     * Sets the pluginpackage_SyncErrors property value. 
     * @param value Value to set for the pluginpackage_SyncErrors property.
     */
    public set pluginpackage_SyncErrors(value: Syncerror[] | undefined) {
        this._pluginpackage_SyncErrors = value;
    };
    /**
     * Gets the pluginpackageid property value. 
     * @returns a string
     */
    public get pluginpackageid() {
        return this._pluginpackageid;
    };
    /**
     * Sets the pluginpackageid property value. 
     * @param value Value to set for the pluginpackageid property.
     */
    public set pluginpackageid(value: string | undefined) {
        this._pluginpackageid = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("content", this.content);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("fileid", this.fileid);
        writer.writeStringValue("fileid_name", this.fileid_name);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Asyncoperation>("pluginpackage_AsyncOperations", this.pluginpackage_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("pluginpackage_BulkDeleteFailures", this.pluginpackage_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Fileattachment>("pluginpackage_FileAttachments", this.pluginpackage_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("pluginpackage_MailboxTrackingFolders", this.pluginpackage_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Pluginassembly>("pluginpackage_pluginassembly", this.pluginpackage_pluginassembly);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("pluginpackage_PrincipalObjectAttributeAccesses", this.pluginpackage_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("pluginpackage_SyncErrors", this.pluginpackage_SyncErrors);
        writer.writeStringValue("pluginpackageid", this.pluginpackageid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeStringValue("version", this.version);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
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
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
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
     * Gets the version property value. 
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. 
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
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
