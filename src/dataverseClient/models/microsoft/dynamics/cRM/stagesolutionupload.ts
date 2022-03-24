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

export class Stagesolutionupload extends Crmbaseentity implements Parsable {
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
    private _stagesolutionupload_AsyncOperations?: Asyncoperation[] | undefined;
    private _stagesolutionupload_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _stagesolutionupload_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _stagesolutionupload_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _stagesolutionupload_FileAttachments?: Fileattachment[] | undefined;
    private _stagesolutionupload_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _stagesolutionupload_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _stagesolutionupload_ProcessSession?: Processsession[] | undefined;
    private _stagesolutionupload_SyncErrors?: Syncerror[] | undefined;
    private _stagesolutionuploadid?: string | undefined;
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
     * Instantiates a new stagesolutionupload and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Stagesolutionupload)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Stagesolutionupload)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Stagesolutionupload)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Stagesolutionupload)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Stagesolutionupload)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Stagesolutionupload)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Stagesolutionupload)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Stagesolutionupload)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Stagesolutionupload).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Stagesolutionupload).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Stagesolutionupload).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Stagesolutionupload).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Stagesolutionupload).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Stagesolutionupload).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Stagesolutionupload).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Stagesolutionupload).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Stagesolutionupload).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Stagesolutionupload).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Stagesolutionupload).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Stagesolutionupload).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Stagesolutionupload).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionfile": (o, n) => { (o as unknown as Stagesolutionupload).solutionfile = n.getStringValue(); },
            "solutionfile_name": (o, n) => { (o as unknown as Stagesolutionupload).solutionfile_name = n.getStringValue(); },
            "solutionfilename": (o, n) => { (o as unknown as Stagesolutionupload).solutionfilename = n.getStringValue(); },
            "solutionuniquename": (o, n) => { (o as unknown as Stagesolutionupload).solutionuniquename = n.getStringValue(); },
            "stagesolutionupload_AsyncOperations": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionupload_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "stagesolutionupload_BulkDeleteFailures": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionupload_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "stagesolutionupload_DuplicateBaseRecord": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionupload_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "stagesolutionupload_DuplicateMatchingRecord": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionupload_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "stagesolutionupload_FileAttachments": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionupload_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "stagesolutionupload_MailboxTrackingFolders": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionupload_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "stagesolutionupload_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionupload_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "stagesolutionupload_ProcessSession": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionupload_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "stagesolutionupload_SyncErrors": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionupload_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "stagesolutionuploadid": (o, n) => { (o as unknown as Stagesolutionupload).stagesolutionuploadid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Stagesolutionupload).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Stagesolutionupload).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Stagesolutionupload).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Stagesolutionupload).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Stagesolutionupload).versionnumber = n.getNumberValue(); },
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("stagesolutionupload_AsyncOperations", this.stagesolutionupload_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("stagesolutionupload_BulkDeleteFailures", this.stagesolutionupload_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("stagesolutionupload_DuplicateBaseRecord", this.stagesolutionupload_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("stagesolutionupload_DuplicateMatchingRecord", this.stagesolutionupload_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Fileattachment>("stagesolutionupload_FileAttachments", this.stagesolutionupload_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("stagesolutionupload_MailboxTrackingFolders", this.stagesolutionupload_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("stagesolutionupload_PrincipalObjectAttributeAccesses", this.stagesolutionupload_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("stagesolutionupload_ProcessSession", this.stagesolutionupload_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("stagesolutionupload_SyncErrors", this.stagesolutionupload_SyncErrors);
        writer.writeStringValue("stagesolutionuploadid", this.stagesolutionuploadid);
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
     * Gets the stagesolutionupload_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get stagesolutionupload_AsyncOperations() {
        return this._stagesolutionupload_AsyncOperations;
    };
    /**
     * Sets the stagesolutionupload_AsyncOperations property value. 
     * @param value Value to set for the stagesolutionupload_AsyncOperations property.
     */
    public set stagesolutionupload_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._stagesolutionupload_AsyncOperations = value;
    };
    /**
     * Gets the stagesolutionupload_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get stagesolutionupload_BulkDeleteFailures() {
        return this._stagesolutionupload_BulkDeleteFailures;
    };
    /**
     * Sets the stagesolutionupload_BulkDeleteFailures property value. 
     * @param value Value to set for the stagesolutionupload_BulkDeleteFailures property.
     */
    public set stagesolutionupload_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._stagesolutionupload_BulkDeleteFailures = value;
    };
    /**
     * Gets the stagesolutionupload_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get stagesolutionupload_DuplicateBaseRecord() {
        return this._stagesolutionupload_DuplicateBaseRecord;
    };
    /**
     * Sets the stagesolutionupload_DuplicateBaseRecord property value. 
     * @param value Value to set for the stagesolutionupload_DuplicateBaseRecord property.
     */
    public set stagesolutionupload_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._stagesolutionupload_DuplicateBaseRecord = value;
    };
    /**
     * Gets the stagesolutionupload_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get stagesolutionupload_DuplicateMatchingRecord() {
        return this._stagesolutionupload_DuplicateMatchingRecord;
    };
    /**
     * Sets the stagesolutionupload_DuplicateMatchingRecord property value. 
     * @param value Value to set for the stagesolutionupload_DuplicateMatchingRecord property.
     */
    public set stagesolutionupload_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._stagesolutionupload_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the stagesolutionupload_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get stagesolutionupload_FileAttachments() {
        return this._stagesolutionupload_FileAttachments;
    };
    /**
     * Sets the stagesolutionupload_FileAttachments property value. 
     * @param value Value to set for the stagesolutionupload_FileAttachments property.
     */
    public set stagesolutionupload_FileAttachments(value: Fileattachment[] | undefined) {
        this._stagesolutionupload_FileAttachments = value;
    };
    /**
     * Gets the stagesolutionupload_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get stagesolutionupload_MailboxTrackingFolders() {
        return this._stagesolutionupload_MailboxTrackingFolders;
    };
    /**
     * Sets the stagesolutionupload_MailboxTrackingFolders property value. 
     * @param value Value to set for the stagesolutionupload_MailboxTrackingFolders property.
     */
    public set stagesolutionupload_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._stagesolutionupload_MailboxTrackingFolders = value;
    };
    /**
     * Gets the stagesolutionupload_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get stagesolutionupload_PrincipalObjectAttributeAccesses() {
        return this._stagesolutionupload_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the stagesolutionupload_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the stagesolutionupload_PrincipalObjectAttributeAccesses property.
     */
    public set stagesolutionupload_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._stagesolutionupload_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the stagesolutionupload_ProcessSession property value. 
     * @returns a processsession
     */
    public get stagesolutionupload_ProcessSession() {
        return this._stagesolutionupload_ProcessSession;
    };
    /**
     * Sets the stagesolutionupload_ProcessSession property value. 
     * @param value Value to set for the stagesolutionupload_ProcessSession property.
     */
    public set stagesolutionupload_ProcessSession(value: Processsession[] | undefined) {
        this._stagesolutionupload_ProcessSession = value;
    };
    /**
     * Gets the stagesolutionupload_SyncErrors property value. 
     * @returns a syncerror
     */
    public get stagesolutionupload_SyncErrors() {
        return this._stagesolutionupload_SyncErrors;
    };
    /**
     * Sets the stagesolutionupload_SyncErrors property value. 
     * @param value Value to set for the stagesolutionupload_SyncErrors property.
     */
    public set stagesolutionupload_SyncErrors(value: Syncerror[] | undefined) {
        this._stagesolutionupload_SyncErrors = value;
    };
    /**
     * Gets the stagesolutionuploadid property value. 
     * @returns a string
     */
    public get stagesolutionuploadid() {
        return this._stagesolutionuploadid;
    };
    /**
     * Sets the stagesolutionuploadid property value. 
     * @param value Value to set for the stagesolutionuploadid property.
     */
    public set stagesolutionuploadid(value: string | undefined) {
        this._stagesolutionuploadid = value;
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
