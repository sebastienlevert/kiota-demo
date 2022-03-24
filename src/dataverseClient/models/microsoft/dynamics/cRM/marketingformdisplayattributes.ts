import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Marketingformdisplayattributes extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _displayattributelist?: string | undefined;
    private _entitylogicalname?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _marketingformdisplayattributes_AsyncOperations?: Asyncoperation[] | undefined;
    private _marketingformdisplayattributes_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _marketingformdisplayattributes_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _marketingformdisplayattributes_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _marketingformdisplayattributes_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _marketingformdisplayattributes_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _marketingformdisplayattributes_ProcessSession?: Processsession[] | undefined;
    private _marketingformdisplayattributes_SyncErrors?: Syncerror[] | undefined;
    private _marketingformdisplayattributesid?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Instantiates a new marketingformdisplayattributes and sets the default values.
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
     * Gets the displayattributelist property value. 
     * @returns a string
     */
    public get displayattributelist() {
        return this._displayattributelist;
    };
    /**
     * Sets the displayattributelist property value. 
     * @param value Value to set for the displayattributelist property.
     */
    public set displayattributelist(value: string | undefined) {
        this._displayattributelist = value;
    };
    /**
     * Gets the entitylogicalname property value. 
     * @returns a string
     */
    public get entitylogicalname() {
        return this._entitylogicalname;
    };
    /**
     * Sets the entitylogicalname property value. 
     * @param value Value to set for the entitylogicalname property.
     */
    public set entitylogicalname(value: string | undefined) {
        this._entitylogicalname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Marketingformdisplayattributes)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Marketingformdisplayattributes)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Marketingformdisplayattributes)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Marketingformdisplayattributes)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Marketingformdisplayattributes)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Marketingformdisplayattributes).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Marketingformdisplayattributes).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Marketingformdisplayattributes).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "displayattributelist": (o, n) => { (o as unknown as Marketingformdisplayattributes).displayattributelist = n.getStringValue(); },
            "entitylogicalname": (o, n) => { (o as unknown as Marketingformdisplayattributes).entitylogicalname = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Marketingformdisplayattributes).importsequencenumber = n.getNumberValue(); },
            "marketingformdisplayattributes_AsyncOperations": (o, n) => { (o as unknown as Marketingformdisplayattributes).marketingformdisplayattributes_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "marketingformdisplayattributes_BulkDeleteFailures": (o, n) => { (o as unknown as Marketingformdisplayattributes).marketingformdisplayattributes_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "marketingformdisplayattributes_DuplicateBaseRecord": (o, n) => { (o as unknown as Marketingformdisplayattributes).marketingformdisplayattributes_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "marketingformdisplayattributes_DuplicateMatchingRecord": (o, n) => { (o as unknown as Marketingformdisplayattributes).marketingformdisplayattributes_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "marketingformdisplayattributes_MailboxTrackingFolders": (o, n) => { (o as unknown as Marketingformdisplayattributes).marketingformdisplayattributes_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "marketingformdisplayattributes_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Marketingformdisplayattributes).marketingformdisplayattributes_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "marketingformdisplayattributes_ProcessSession": (o, n) => { (o as unknown as Marketingformdisplayattributes).marketingformdisplayattributes_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "marketingformdisplayattributes_SyncErrors": (o, n) => { (o as unknown as Marketingformdisplayattributes).marketingformdisplayattributes_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "marketingformdisplayattributesid": (o, n) => { (o as unknown as Marketingformdisplayattributes).marketingformdisplayattributesid = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Marketingformdisplayattributes).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Marketingformdisplayattributes).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Marketingformdisplayattributes).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Marketingformdisplayattributes).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Marketingformdisplayattributes).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Marketingformdisplayattributes).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Marketingformdisplayattributes).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Marketingformdisplayattributes).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Marketingformdisplayattributes).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Marketingformdisplayattributes).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Marketingformdisplayattributes).versionnumber = n.getNumberValue(); },
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
     * Gets the marketingformdisplayattributes_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get marketingformdisplayattributes_AsyncOperations() {
        return this._marketingformdisplayattributes_AsyncOperations;
    };
    /**
     * Sets the marketingformdisplayattributes_AsyncOperations property value. 
     * @param value Value to set for the marketingformdisplayattributes_AsyncOperations property.
     */
    public set marketingformdisplayattributes_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._marketingformdisplayattributes_AsyncOperations = value;
    };
    /**
     * Gets the marketingformdisplayattributes_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get marketingformdisplayattributes_BulkDeleteFailures() {
        return this._marketingformdisplayattributes_BulkDeleteFailures;
    };
    /**
     * Sets the marketingformdisplayattributes_BulkDeleteFailures property value. 
     * @param value Value to set for the marketingformdisplayattributes_BulkDeleteFailures property.
     */
    public set marketingformdisplayattributes_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._marketingformdisplayattributes_BulkDeleteFailures = value;
    };
    /**
     * Gets the marketingformdisplayattributes_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get marketingformdisplayattributes_DuplicateBaseRecord() {
        return this._marketingformdisplayattributes_DuplicateBaseRecord;
    };
    /**
     * Sets the marketingformdisplayattributes_DuplicateBaseRecord property value. 
     * @param value Value to set for the marketingformdisplayattributes_DuplicateBaseRecord property.
     */
    public set marketingformdisplayattributes_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._marketingformdisplayattributes_DuplicateBaseRecord = value;
    };
    /**
     * Gets the marketingformdisplayattributes_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get marketingformdisplayattributes_DuplicateMatchingRecord() {
        return this._marketingformdisplayattributes_DuplicateMatchingRecord;
    };
    /**
     * Sets the marketingformdisplayattributes_DuplicateMatchingRecord property value. 
     * @param value Value to set for the marketingformdisplayattributes_DuplicateMatchingRecord property.
     */
    public set marketingformdisplayattributes_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._marketingformdisplayattributes_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the marketingformdisplayattributes_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get marketingformdisplayattributes_MailboxTrackingFolders() {
        return this._marketingformdisplayattributes_MailboxTrackingFolders;
    };
    /**
     * Sets the marketingformdisplayattributes_MailboxTrackingFolders property value. 
     * @param value Value to set for the marketingformdisplayattributes_MailboxTrackingFolders property.
     */
    public set marketingformdisplayattributes_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._marketingformdisplayattributes_MailboxTrackingFolders = value;
    };
    /**
     * Gets the marketingformdisplayattributes_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get marketingformdisplayattributes_PrincipalObjectAttributeAccesses() {
        return this._marketingformdisplayattributes_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the marketingformdisplayattributes_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the marketingformdisplayattributes_PrincipalObjectAttributeAccesses property.
     */
    public set marketingformdisplayattributes_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._marketingformdisplayattributes_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the marketingformdisplayattributes_ProcessSession property value. 
     * @returns a processsession
     */
    public get marketingformdisplayattributes_ProcessSession() {
        return this._marketingformdisplayattributes_ProcessSession;
    };
    /**
     * Sets the marketingformdisplayattributes_ProcessSession property value. 
     * @param value Value to set for the marketingformdisplayattributes_ProcessSession property.
     */
    public set marketingformdisplayattributes_ProcessSession(value: Processsession[] | undefined) {
        this._marketingformdisplayattributes_ProcessSession = value;
    };
    /**
     * Gets the marketingformdisplayattributes_SyncErrors property value. 
     * @returns a syncerror
     */
    public get marketingformdisplayattributes_SyncErrors() {
        return this._marketingformdisplayattributes_SyncErrors;
    };
    /**
     * Sets the marketingformdisplayattributes_SyncErrors property value. 
     * @param value Value to set for the marketingformdisplayattributes_SyncErrors property.
     */
    public set marketingformdisplayattributes_SyncErrors(value: Syncerror[] | undefined) {
        this._marketingformdisplayattributes_SyncErrors = value;
    };
    /**
     * Gets the marketingformdisplayattributesid property value. 
     * @returns a string
     */
    public get marketingformdisplayattributesid() {
        return this._marketingformdisplayattributesid;
    };
    /**
     * Sets the marketingformdisplayattributesid property value. 
     * @param value Value to set for the marketingformdisplayattributesid property.
     */
    public set marketingformdisplayattributesid(value: string | undefined) {
        this._marketingformdisplayattributesid = value;
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
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("displayattributelist", this.displayattributelist);
        writer.writeStringValue("entitylogicalname", this.entitylogicalname);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeCollectionOfObjectValues<Asyncoperation>("marketingformdisplayattributes_AsyncOperations", this.marketingformdisplayattributes_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("marketingformdisplayattributes_BulkDeleteFailures", this.marketingformdisplayattributes_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("marketingformdisplayattributes_DuplicateBaseRecord", this.marketingformdisplayattributes_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("marketingformdisplayattributes_DuplicateMatchingRecord", this.marketingformdisplayattributes_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("marketingformdisplayattributes_MailboxTrackingFolders", this.marketingformdisplayattributes_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("marketingformdisplayattributes_PrincipalObjectAttributeAccesses", this.marketingformdisplayattributes_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("marketingformdisplayattributes_ProcessSession", this.marketingformdisplayattributes_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("marketingformdisplayattributes_SyncErrors", this.marketingformdisplayattributes_SyncErrors);
        writer.writeStringValue("marketingformdisplayattributesid", this.marketingformdisplayattributesid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
