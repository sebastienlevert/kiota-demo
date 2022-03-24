import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_projectapprovalFromDiscriminatorValue} from './createMsdyn_projectapprovalFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_project, Msdyn_projectapproval, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_approvalset extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_approver_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
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
    private _msdyn_actiontype?: number | undefined;
    private _msdyn_approvalset_Annotations?: Annotation[] | undefined;
    private _msdyn_approvalset_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_approvalset_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_approvalset_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_approvalset_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_approvalset_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_approvalset_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_approvalset_ProcessSession?: Processsession[] | undefined;
    private _msdyn_approvalset_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_approvalsetid?: string | undefined;
    private _msdyn_Approver?: Systemuser | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_entrytype?: number | undefined;
    private _msdyn_lifetime?: number | undefined;
    private _msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet?: Msdyn_projectapproval[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_systemjobid?: string | undefined;
    private _msdyn_targetstatus?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_approver_value property value. 
     * @returns a string
     */
    public get _msdyn_approver_value() {
        return this.__msdyn_approver_value;
    };
    /**
     * Sets the _msdyn_approver_value property value. 
     * @param value Value to set for the _msdyn_approver_value property.
     */
    public set _msdyn_approver_value(value: string | undefined) {
        this.__msdyn_approver_value = value;
    };
    /**
     * Gets the _msdyn_project_value property value. 
     * @returns a string
     */
    public get _msdyn_project_value() {
        return this.__msdyn_project_value;
    };
    /**
     * Sets the _msdyn_project_value property value. 
     * @param value Value to set for the _msdyn_project_value property.
     */
    public set _msdyn_project_value(value: string | undefined) {
        this.__msdyn_project_value = value;
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
     * Instantiates a new msdyn_approvalset and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_approvalset)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_approvalset)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_approvalset)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_approvalset)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_approver_value": (o, n) => { (o as unknown as Msdyn_approvalset)._msdyn_approver_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_approvalset)._msdyn_project_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_approvalset)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_approvalset)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_approvalset)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_approvalset)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_approvalset).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_approvalset).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_approvalset).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_approvalset).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_approvalset).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_approvalset).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_approvalset).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actiontype": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_actiontype = n.getNumberValue(); },
            "msdyn_approvalset_Annotations": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalset_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_approvalset_AsyncOperations": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalset_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_approvalset_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalset_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_approvalset_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalset_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_approvalset_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalset_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_approvalset_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalset_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_approvalset_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalset_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_approvalset_ProcessSession": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalset_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_approvalset_SyncErrors": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalset_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_approvalsetid": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_approvalsetid = n.getStringValue(); },
            "msdyn_Approver": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_Approver = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_description = n.getStringValue(); },
            "msdyn_entrytype": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_entrytype = n.getNumberValue(); },
            "msdyn_lifetime": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_lifetime = n.getNumberValue(); },
            "msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet = n.getCollectionOfObjectValues<Msdyn_projectapproval>(createMsdyn_projectapprovalFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_name = n.getStringValue(); },
            "msdyn_Project": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_systemjobid": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_systemjobid = n.getStringValue(); },
            "msdyn_targetstatus": (o, n) => { (o as unknown as Msdyn_approvalset).msdyn_targetstatus = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_approvalset).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_approvalset).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_approvalset).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_approvalset).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_approvalset).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_approvalset).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_approvalset).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_approvalset).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_approvalset).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_approvalset).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_actiontype property value. 
     * @returns a integer
     */
    public get msdyn_actiontype() {
        return this._msdyn_actiontype;
    };
    /**
     * Sets the msdyn_actiontype property value. 
     * @param value Value to set for the msdyn_actiontype property.
     */
    public set msdyn_actiontype(value: number | undefined) {
        this._msdyn_actiontype = value;
    };
    /**
     * Gets the msdyn_approvalset_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_approvalset_Annotations() {
        return this._msdyn_approvalset_Annotations;
    };
    /**
     * Sets the msdyn_approvalset_Annotations property value. 
     * @param value Value to set for the msdyn_approvalset_Annotations property.
     */
    public set msdyn_approvalset_Annotations(value: Annotation[] | undefined) {
        this._msdyn_approvalset_Annotations = value;
    };
    /**
     * Gets the msdyn_approvalset_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_approvalset_AsyncOperations() {
        return this._msdyn_approvalset_AsyncOperations;
    };
    /**
     * Sets the msdyn_approvalset_AsyncOperations property value. 
     * @param value Value to set for the msdyn_approvalset_AsyncOperations property.
     */
    public set msdyn_approvalset_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_approvalset_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_approvalset_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_approvalset_BulkDeleteFailures() {
        return this._msdyn_approvalset_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_approvalset_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_approvalset_BulkDeleteFailures property.
     */
    public set msdyn_approvalset_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_approvalset_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_approvalset_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_approvalset_DuplicateBaseRecord() {
        return this._msdyn_approvalset_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_approvalset_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_approvalset_DuplicateBaseRecord property.
     */
    public set msdyn_approvalset_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_approvalset_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_approvalset_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_approvalset_DuplicateMatchingRecord() {
        return this._msdyn_approvalset_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_approvalset_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_approvalset_DuplicateMatchingRecord property.
     */
    public set msdyn_approvalset_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_approvalset_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_approvalset_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_approvalset_MailboxTrackingFolders() {
        return this._msdyn_approvalset_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_approvalset_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_approvalset_MailboxTrackingFolders property.
     */
    public set msdyn_approvalset_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_approvalset_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_approvalset_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_approvalset_PrincipalObjectAttributeAccesses() {
        return this._msdyn_approvalset_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_approvalset_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_approvalset_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_approvalset_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_approvalset_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_approvalset_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_approvalset_ProcessSession() {
        return this._msdyn_approvalset_ProcessSession;
    };
    /**
     * Sets the msdyn_approvalset_ProcessSession property value. 
     * @param value Value to set for the msdyn_approvalset_ProcessSession property.
     */
    public set msdyn_approvalset_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_approvalset_ProcessSession = value;
    };
    /**
     * Gets the msdyn_approvalset_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_approvalset_SyncErrors() {
        return this._msdyn_approvalset_SyncErrors;
    };
    /**
     * Sets the msdyn_approvalset_SyncErrors property value. 
     * @param value Value to set for the msdyn_approvalset_SyncErrors property.
     */
    public set msdyn_approvalset_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_approvalset_SyncErrors = value;
    };
    /**
     * Gets the msdyn_approvalsetid property value. 
     * @returns a string
     */
    public get msdyn_approvalsetid() {
        return this._msdyn_approvalsetid;
    };
    /**
     * Sets the msdyn_approvalsetid property value. 
     * @param value Value to set for the msdyn_approvalsetid property.
     */
    public set msdyn_approvalsetid(value: string | undefined) {
        this._msdyn_approvalsetid = value;
    };
    /**
     * Gets the msdyn_Approver property value. 
     * @returns a systemuser
     */
    public get msdyn_Approver() {
        return this._msdyn_Approver;
    };
    /**
     * Sets the msdyn_Approver property value. 
     * @param value Value to set for the msdyn_Approver property.
     */
    public set msdyn_Approver(value: Systemuser | undefined) {
        this._msdyn_Approver = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_entrytype property value. 
     * @returns a integer
     */
    public get msdyn_entrytype() {
        return this._msdyn_entrytype;
    };
    /**
     * Sets the msdyn_entrytype property value. 
     * @param value Value to set for the msdyn_entrytype property.
     */
    public set msdyn_entrytype(value: number | undefined) {
        this._msdyn_entrytype = value;
    };
    /**
     * Gets the msdyn_lifetime property value. 
     * @returns a integer
     */
    public get msdyn_lifetime() {
        return this._msdyn_lifetime;
    };
    /**
     * Sets the msdyn_lifetime property value. 
     * @param value Value to set for the msdyn_lifetime property.
     */
    public set msdyn_lifetime(value: number | undefined) {
        this._msdyn_lifetime = value;
    };
    /**
     * Gets the msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet property value. 
     * @returns a msdyn_projectapproval
     */
    public get msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet() {
        return this._msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet;
    };
    /**
     * Sets the msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet property value. 
     * @param value Value to set for the msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet property.
     */
    public set msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet(value: Msdyn_projectapproval[] | undefined) {
        this._msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_Project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_Project() {
        return this._msdyn_Project;
    };
    /**
     * Sets the msdyn_Project property value. 
     * @param value Value to set for the msdyn_Project property.
     */
    public set msdyn_Project(value: Msdyn_project | undefined) {
        this._msdyn_Project = value;
    };
    /**
     * Gets the msdyn_systemjobid property value. 
     * @returns a string
     */
    public get msdyn_systemjobid() {
        return this._msdyn_systemjobid;
    };
    /**
     * Sets the msdyn_systemjobid property value. 
     * @param value Value to set for the msdyn_systemjobid property.
     */
    public set msdyn_systemjobid(value: string | undefined) {
        this._msdyn_systemjobid = value;
    };
    /**
     * Gets the msdyn_targetstatus property value. 
     * @returns a integer
     */
    public get msdyn_targetstatus() {
        return this._msdyn_targetstatus;
    };
    /**
     * Sets the msdyn_targetstatus property value. 
     * @param value Value to set for the msdyn_targetstatus property.
     */
    public set msdyn_targetstatus(value: number | undefined) {
        this._msdyn_targetstatus = value;
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
        writer.writeStringValue("_msdyn_approver_value", this._msdyn_approver_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
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
        writer.writeNumberValue("msdyn_actiontype", this.msdyn_actiontype);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_approvalset_Annotations", this.msdyn_approvalset_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_approvalset_AsyncOperations", this.msdyn_approvalset_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_approvalset_BulkDeleteFailures", this.msdyn_approvalset_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_approvalset_DuplicateBaseRecord", this.msdyn_approvalset_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_approvalset_DuplicateMatchingRecord", this.msdyn_approvalset_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_approvalset_MailboxTrackingFolders", this.msdyn_approvalset_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_approvalset_PrincipalObjectAttributeAccesses", this.msdyn_approvalset_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_approvalset_ProcessSession", this.msdyn_approvalset_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_approvalset_SyncErrors", this.msdyn_approvalset_SyncErrors);
        writer.writeStringValue("msdyn_approvalsetid", this.msdyn_approvalsetid);
        writer.writeObjectValue<Systemuser>("msdyn_Approver", this.msdyn_Approver);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_entrytype", this.msdyn_entrytype);
        writer.writeNumberValue("msdyn_lifetime", this.msdyn_lifetime);
        writer.writeCollectionOfObjectValues<Msdyn_projectapproval>("msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet", this.msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeStringValue("msdyn_systemjobid", this.msdyn_systemjobid);
        writer.writeNumberValue("msdyn_targetstatus", this.msdyn_targetstatus);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
