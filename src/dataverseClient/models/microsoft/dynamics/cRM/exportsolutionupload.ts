import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Fileattachment, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Exportsolutionupload extends Crmbaseentity implements Parsable {
    private __asyncoperationid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exportsolutionupload_AsyncOperations?: Asyncoperation[] | undefined;
    private _exportsolutionupload_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _exportsolutionupload_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _exportsolutionupload_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _exportsolutionupload_FileAttachments?: Fileattachment[] | undefined;
    private _exportsolutionupload_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _exportsolutionupload_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _exportsolutionupload_ProcessSession?: Processsession[] | undefined;
    private _exportsolutionupload_SyncErrors?: Syncerror[] | undefined;
    private _exportsolutionuploadid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _solutionfile?: string | undefined;
    private _solutionfile_name?: string | undefined;
    private _solutionfilename?: string | undefined;
    private _solutionuniquename?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _asyncoperationid_value property value. 
     * @returns a string
     */
    public get _asyncoperationid_value() {
        return this.__asyncoperationid_value;
    };
    /**
     * Sets the _asyncoperationid_value property value. 
     * @param value Value to set for the _asyncoperationid_value property.
     */
    public set _asyncoperationid_value(value: string | undefined) {
        this.__asyncoperationid_value = value;
    };
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new exportsolutionupload and sets the default values.
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
     * Gets the exportsolutionupload_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get exportsolutionupload_AsyncOperations() {
        return this._exportsolutionupload_AsyncOperations;
    };
    /**
     * Sets the exportsolutionupload_AsyncOperations property value. 
     * @param value Value to set for the exportsolutionupload_AsyncOperations property.
     */
    public set exportsolutionupload_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._exportsolutionupload_AsyncOperations = value;
    };
    /**
     * Gets the exportsolutionupload_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get exportsolutionupload_BulkDeleteFailures() {
        return this._exportsolutionupload_BulkDeleteFailures;
    };
    /**
     * Sets the exportsolutionupload_BulkDeleteFailures property value. 
     * @param value Value to set for the exportsolutionupload_BulkDeleteFailures property.
     */
    public set exportsolutionupload_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._exportsolutionupload_BulkDeleteFailures = value;
    };
    /**
     * Gets the exportsolutionupload_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get exportsolutionupload_DuplicateBaseRecord() {
        return this._exportsolutionupload_DuplicateBaseRecord;
    };
    /**
     * Sets the exportsolutionupload_DuplicateBaseRecord property value. 
     * @param value Value to set for the exportsolutionupload_DuplicateBaseRecord property.
     */
    public set exportsolutionupload_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._exportsolutionupload_DuplicateBaseRecord = value;
    };
    /**
     * Gets the exportsolutionupload_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get exportsolutionupload_DuplicateMatchingRecord() {
        return this._exportsolutionupload_DuplicateMatchingRecord;
    };
    /**
     * Sets the exportsolutionupload_DuplicateMatchingRecord property value. 
     * @param value Value to set for the exportsolutionupload_DuplicateMatchingRecord property.
     */
    public set exportsolutionupload_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._exportsolutionupload_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the exportsolutionupload_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get exportsolutionupload_FileAttachments() {
        return this._exportsolutionupload_FileAttachments;
    };
    /**
     * Sets the exportsolutionupload_FileAttachments property value. 
     * @param value Value to set for the exportsolutionupload_FileAttachments property.
     */
    public set exportsolutionupload_FileAttachments(value: Fileattachment[] | undefined) {
        this._exportsolutionupload_FileAttachments = value;
    };
    /**
     * Gets the exportsolutionupload_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get exportsolutionupload_MailboxTrackingFolders() {
        return this._exportsolutionupload_MailboxTrackingFolders;
    };
    /**
     * Sets the exportsolutionupload_MailboxTrackingFolders property value. 
     * @param value Value to set for the exportsolutionupload_MailboxTrackingFolders property.
     */
    public set exportsolutionupload_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._exportsolutionupload_MailboxTrackingFolders = value;
    };
    /**
     * Gets the exportsolutionupload_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get exportsolutionupload_PrincipalObjectAttributeAccesses() {
        return this._exportsolutionupload_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the exportsolutionupload_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the exportsolutionupload_PrincipalObjectAttributeAccesses property.
     */
    public set exportsolutionupload_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._exportsolutionupload_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the exportsolutionupload_ProcessSession property value. 
     * @returns a processsession
     */
    public get exportsolutionupload_ProcessSession() {
        return this._exportsolutionupload_ProcessSession;
    };
    /**
     * Sets the exportsolutionupload_ProcessSession property value. 
     * @param value Value to set for the exportsolutionupload_ProcessSession property.
     */
    public set exportsolutionupload_ProcessSession(value: Processsession[] | undefined) {
        this._exportsolutionupload_ProcessSession = value;
    };
    /**
     * Gets the exportsolutionupload_SyncErrors property value. 
     * @returns a syncerror
     */
    public get exportsolutionupload_SyncErrors() {
        return this._exportsolutionupload_SyncErrors;
    };
    /**
     * Sets the exportsolutionupload_SyncErrors property value. 
     * @param value Value to set for the exportsolutionupload_SyncErrors property.
     */
    public set exportsolutionupload_SyncErrors(value: Syncerror[] | undefined) {
        this._exportsolutionupload_SyncErrors = value;
    };
    /**
     * Gets the exportsolutionuploadid property value. 
     * @returns a string
     */
    public get exportsolutionuploadid() {
        return this._exportsolutionuploadid;
    };
    /**
     * Sets the exportsolutionuploadid property value. 
     * @param value Value to set for the exportsolutionuploadid property.
     */
    public set exportsolutionuploadid(value: string | undefined) {
        this._exportsolutionuploadid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_asyncoperationid_value": (o, n) => { (o as unknown as Exportsolutionupload)._asyncoperationid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Exportsolutionupload)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Exportsolutionupload)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Exportsolutionupload)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Exportsolutionupload)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Exportsolutionupload)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Exportsolutionupload)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Exportsolutionupload)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Exportsolutionupload)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Exportsolutionupload).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Exportsolutionupload).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Exportsolutionupload).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exportsolutionupload_AsyncOperations": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionupload_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "exportsolutionupload_BulkDeleteFailures": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionupload_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "exportsolutionupload_DuplicateBaseRecord": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionupload_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "exportsolutionupload_DuplicateMatchingRecord": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionupload_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "exportsolutionupload_FileAttachments": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionupload_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "exportsolutionupload_MailboxTrackingFolders": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionupload_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "exportsolutionupload_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionupload_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "exportsolutionupload_ProcessSession": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionupload_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "exportsolutionupload_SyncErrors": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionupload_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "exportsolutionuploadid": (o, n) => { (o as unknown as Exportsolutionupload).exportsolutionuploadid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Exportsolutionupload).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Exportsolutionupload).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Exportsolutionupload).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Exportsolutionupload).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Exportsolutionupload).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Exportsolutionupload).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Exportsolutionupload).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Exportsolutionupload).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Exportsolutionupload).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Exportsolutionupload).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionfile": (o, n) => { (o as unknown as Exportsolutionupload).solutionfile = n.getStringValue(); },
            "solutionfile_name": (o, n) => { (o as unknown as Exportsolutionupload).solutionfile_name = n.getStringValue(); },
            "solutionfilename": (o, n) => { (o as unknown as Exportsolutionupload).solutionfilename = n.getStringValue(); },
            "solutionuniquename": (o, n) => { (o as unknown as Exportsolutionupload).solutionuniquename = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Exportsolutionupload).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Exportsolutionupload).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Exportsolutionupload).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Exportsolutionupload).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Exportsolutionupload).versionnumber = n.getNumberValue(); },
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_asyncoperationid_value", this._asyncoperationid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("exportsolutionupload_AsyncOperations", this.exportsolutionupload_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("exportsolutionupload_BulkDeleteFailures", this.exportsolutionupload_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("exportsolutionupload_DuplicateBaseRecord", this.exportsolutionupload_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("exportsolutionupload_DuplicateMatchingRecord", this.exportsolutionupload_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Fileattachment>("exportsolutionupload_FileAttachments", this.exportsolutionupload_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("exportsolutionupload_MailboxTrackingFolders", this.exportsolutionupload_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("exportsolutionupload_PrincipalObjectAttributeAccesses", this.exportsolutionupload_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("exportsolutionupload_ProcessSession", this.exportsolutionupload_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("exportsolutionupload_SyncErrors", this.exportsolutionupload_SyncErrors);
        writer.writeStringValue("exportsolutionuploadid", this.exportsolutionuploadid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("solutionfile", this.solutionfile);
        writer.writeStringValue("solutionfile_name", this.solutionfile_name);
        writer.writeStringValue("solutionfilename", this.solutionfilename);
        writer.writeStringValue("solutionuniquename", this.solutionuniquename);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionfile property value. 
     * @returns a binary
     */
    public get solutionfile() {
        return this._solutionfile;
    };
    /**
     * Sets the solutionfile property value. 
     * @param value Value to set for the solutionfile property.
     */
    public set solutionfile(value: string | undefined) {
        this._solutionfile = value;
    };
    /**
     * Gets the solutionfile_name property value. 
     * @returns a string
     */
    public get solutionfile_name() {
        return this._solutionfile_name;
    };
    /**
     * Sets the solutionfile_name property value. 
     * @param value Value to set for the solutionfile_name property.
     */
    public set solutionfile_name(value: string | undefined) {
        this._solutionfile_name = value;
    };
    /**
     * Gets the solutionfilename property value. 
     * @returns a string
     */
    public get solutionfilename() {
        return this._solutionfilename;
    };
    /**
     * Sets the solutionfilename property value. 
     * @param value Value to set for the solutionfilename property.
     */
    public set solutionfilename(value: string | undefined) {
        this._solutionfilename = value;
    };
    /**
     * Gets the solutionuniquename property value. 
     * @returns a string
     */
    public get solutionuniquename() {
        return this._solutionuniquename;
    };
    /**
     * Sets the solutionuniquename property value. 
     * @param value Value to set for the solutionuniquename property.
     */
    public set solutionuniquename(value: string | undefined) {
        this._solutionuniquename = value;
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
