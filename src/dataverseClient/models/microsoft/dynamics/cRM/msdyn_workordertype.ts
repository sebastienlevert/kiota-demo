import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_agreementbookingsetupFromDiscriminatorValue} from './createMsdyn_agreementbookingsetupFromDiscriminatorValue';
import {createMsdyn_incidenttypeFromDiscriminatorValue} from './createMsdyn_incidenttypeFromDiscriminatorValue';
import {createMsdyn_quotebookingsetupFromDiscriminatorValue} from './createMsdyn_quotebookingsetupFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_actual, Msdyn_agreementbookingsetup, Msdyn_incidenttype, Msdyn_quotebookingsetup, Msdyn_workorder, Opportunity, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_workordertype extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
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
    private _msdyn_incidentrequired?: boolean | undefined;
    private _msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType?: Msdyn_actual[] | undefined;
    private _msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType?: Msdyn_agreementbookingsetup[] | undefined;
    private _msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType?: Msdyn_incidenttype[] | undefined;
    private _msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType?: Msdyn_quotebookingsetup[] | undefined;
    private _msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType?: Msdyn_workorder[] | undefined;
    private _msdyn_msdyn_workordertype_opportunity_WorkOrderType?: Opportunity[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_pricelist?: Pricelevel | undefined;
    private _msdyn_taxable?: boolean | undefined;
    private _msdyn_workordertype_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_workordertype_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_workordertype_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workordertype_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_workordertype_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_workordertype_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_workordertype_ProcessSession?: Processsession[] | undefined;
    private _msdyn_workordertype_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_workordertypeid?: string | undefined;
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
     * Gets the _msdyn_pricelist_value property value. 
     * @returns a string
     */
    public get _msdyn_pricelist_value() {
        return this.__msdyn_pricelist_value;
    };
    /**
     * Sets the _msdyn_pricelist_value property value. 
     * @param value Value to set for the _msdyn_pricelist_value property.
     */
    public set _msdyn_pricelist_value(value: string | undefined) {
        this.__msdyn_pricelist_value = value;
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
     * Instantiates a new msdyn_workordertype and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_workordertype)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workordertype)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_workordertype)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_workordertype)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_workordertype)._msdyn_pricelist_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_workordertype)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_workordertype)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_workordertype)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_workordertype)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_workordertype).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_workordertype).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_workordertype).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_workordertype).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_workordertype).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_workordertype).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_workordertype).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_incidentrequired": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_incidentrequired = n.getBooleanValue(); },
            "msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType = n.getCollectionOfObjectValues<Msdyn_agreementbookingsetup>(createMsdyn_agreementbookingsetupFromDiscriminatorValue); },
            "msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType = n.getCollectionOfObjectValues<Msdyn_incidenttype>(createMsdyn_incidenttypeFromDiscriminatorValue); },
            "msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType = n.getCollectionOfObjectValues<Msdyn_quotebookingsetup>(createMsdyn_quotebookingsetupFromDiscriminatorValue); },
            "msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_msdyn_workordertype_opportunity_WorkOrderType": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_msdyn_workordertype_opportunity_WorkOrderType = n.getCollectionOfObjectValues<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_name = n.getStringValue(); },
            "msdyn_pricelist": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_pricelist = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_taxable": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_taxable = n.getBooleanValue(); },
            "msdyn_workordertype_AsyncOperations": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_workordertype_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_workordertype_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_workordertype_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_workordertype_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_workordertype_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workordertype_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_workordertype_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_workordertype_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_workordertype_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_workordertype_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_workordertype_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_workordertype_ProcessSession": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_workordertype_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_workordertype_SyncErrors": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_workordertype_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_workordertypeid": (o, n) => { (o as unknown as Msdyn_workordertype).msdyn_workordertypeid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_workordertype).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_workordertype).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_workordertype).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_workordertype).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_workordertype).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_workordertype).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_workordertype).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_workordertype).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_workordertype).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_workordertype).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_incidentrequired property value. 
     * @returns a boolean
     */
    public get msdyn_incidentrequired() {
        return this._msdyn_incidentrequired;
    };
    /**
     * Sets the msdyn_incidentrequired property value. 
     * @param value Value to set for the msdyn_incidentrequired property.
     */
    public set msdyn_incidentrequired(value: boolean | undefined) {
        this._msdyn_incidentrequired = value;
    };
    /**
     * Gets the msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType() {
        return this._msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType;
    };
    /**
     * Sets the msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType property value. 
     * @param value Value to set for the msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType property.
     */
    public set msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType(value: Msdyn_actual[] | undefined) {
        this._msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType = value;
    };
    /**
     * Gets the msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType property value. 
     * @returns a msdyn_agreementbookingsetup
     */
    public get msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType() {
        return this._msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType;
    };
    /**
     * Sets the msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType property value. 
     * @param value Value to set for the msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType property.
     */
    public set msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType(value: Msdyn_agreementbookingsetup[] | undefined) {
        this._msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType = value;
    };
    /**
     * Gets the msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType property value. 
     * @returns a msdyn_incidenttype
     */
    public get msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType() {
        return this._msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType;
    };
    /**
     * Sets the msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType property value. 
     * @param value Value to set for the msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType property.
     */
    public set msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType(value: Msdyn_incidenttype[] | undefined) {
        this._msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType = value;
    };
    /**
     * Gets the msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType property value. 
     * @returns a msdyn_quotebookingsetup
     */
    public get msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType() {
        return this._msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType;
    };
    /**
     * Sets the msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType property value. 
     * @param value Value to set for the msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType property.
     */
    public set msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType(value: Msdyn_quotebookingsetup[] | undefined) {
        this._msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType = value;
    };
    /**
     * Gets the msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType() {
        return this._msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType;
    };
    /**
     * Sets the msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType property value. 
     * @param value Value to set for the msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType property.
     */
    public set msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType(value: Msdyn_workorder[] | undefined) {
        this._msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType = value;
    };
    /**
     * Gets the msdyn_msdyn_workordertype_opportunity_WorkOrderType property value. 
     * @returns a opportunity
     */
    public get msdyn_msdyn_workordertype_opportunity_WorkOrderType() {
        return this._msdyn_msdyn_workordertype_opportunity_WorkOrderType;
    };
    /**
     * Sets the msdyn_msdyn_workordertype_opportunity_WorkOrderType property value. 
     * @param value Value to set for the msdyn_msdyn_workordertype_opportunity_WorkOrderType property.
     */
    public set msdyn_msdyn_workordertype_opportunity_WorkOrderType(value: Opportunity[] | undefined) {
        this._msdyn_msdyn_workordertype_opportunity_WorkOrderType = value;
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
     * Gets the msdyn_pricelist property value. 
     * @returns a pricelevel
     */
    public get msdyn_pricelist() {
        return this._msdyn_pricelist;
    };
    /**
     * Sets the msdyn_pricelist property value. 
     * @param value Value to set for the msdyn_pricelist property.
     */
    public set msdyn_pricelist(value: Pricelevel | undefined) {
        this._msdyn_pricelist = value;
    };
    /**
     * Gets the msdyn_taxable property value. 
     * @returns a boolean
     */
    public get msdyn_taxable() {
        return this._msdyn_taxable;
    };
    /**
     * Sets the msdyn_taxable property value. 
     * @param value Value to set for the msdyn_taxable property.
     */
    public set msdyn_taxable(value: boolean | undefined) {
        this._msdyn_taxable = value;
    };
    /**
     * Gets the msdyn_workordertype_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_workordertype_AsyncOperations() {
        return this._msdyn_workordertype_AsyncOperations;
    };
    /**
     * Sets the msdyn_workordertype_AsyncOperations property value. 
     * @param value Value to set for the msdyn_workordertype_AsyncOperations property.
     */
    public set msdyn_workordertype_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_workordertype_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_workordertype_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_workordertype_BulkDeleteFailures() {
        return this._msdyn_workordertype_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_workordertype_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_workordertype_BulkDeleteFailures property.
     */
    public set msdyn_workordertype_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_workordertype_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_workordertype_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workordertype_DuplicateBaseRecord() {
        return this._msdyn_workordertype_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_workordertype_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_workordertype_DuplicateBaseRecord property.
     */
    public set msdyn_workordertype_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workordertype_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_workordertype_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_workordertype_DuplicateMatchingRecord() {
        return this._msdyn_workordertype_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_workordertype_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_workordertype_DuplicateMatchingRecord property.
     */
    public set msdyn_workordertype_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_workordertype_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_workordertype_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_workordertype_MailboxTrackingFolders() {
        return this._msdyn_workordertype_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_workordertype_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_workordertype_MailboxTrackingFolders property.
     */
    public set msdyn_workordertype_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_workordertype_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_workordertype_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_workordertype_PrincipalObjectAttributeAccesses() {
        return this._msdyn_workordertype_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_workordertype_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_workordertype_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_workordertype_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_workordertype_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_workordertype_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_workordertype_ProcessSession() {
        return this._msdyn_workordertype_ProcessSession;
    };
    /**
     * Sets the msdyn_workordertype_ProcessSession property value. 
     * @param value Value to set for the msdyn_workordertype_ProcessSession property.
     */
    public set msdyn_workordertype_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_workordertype_ProcessSession = value;
    };
    /**
     * Gets the msdyn_workordertype_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_workordertype_SyncErrors() {
        return this._msdyn_workordertype_SyncErrors;
    };
    /**
     * Sets the msdyn_workordertype_SyncErrors property value. 
     * @param value Value to set for the msdyn_workordertype_SyncErrors property.
     */
    public set msdyn_workordertype_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_workordertype_SyncErrors = value;
    };
    /**
     * Gets the msdyn_workordertypeid property value. 
     * @returns a string
     */
    public get msdyn_workordertypeid() {
        return this._msdyn_workordertypeid;
    };
    /**
     * Sets the msdyn_workordertypeid property value. 
     * @param value Value to set for the msdyn_workordertypeid property.
     */
    public set msdyn_workordertypeid(value: string | undefined) {
        this._msdyn_workordertypeid = value;
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
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
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
        writer.writeBooleanValue("msdyn_incidentrequired", this.msdyn_incidentrequired);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType", this.msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType);
        writer.writeCollectionOfObjectValues<Msdyn_agreementbookingsetup>("msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType", this.msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttype>("msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType", this.msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType);
        writer.writeCollectionOfObjectValues<Msdyn_quotebookingsetup>("msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType", this.msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType", this.msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType);
        writer.writeCollectionOfObjectValues<Opportunity>("msdyn_msdyn_workordertype_opportunity_WorkOrderType", this.msdyn_msdyn_workordertype_opportunity_WorkOrderType);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Pricelevel>("msdyn_pricelist", this.msdyn_pricelist);
        writer.writeBooleanValue("msdyn_taxable", this.msdyn_taxable);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_workordertype_AsyncOperations", this.msdyn_workordertype_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_workordertype_BulkDeleteFailures", this.msdyn_workordertype_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workordertype_DuplicateBaseRecord", this.msdyn_workordertype_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_workordertype_DuplicateMatchingRecord", this.msdyn_workordertype_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_workordertype_MailboxTrackingFolders", this.msdyn_workordertype_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_workordertype_PrincipalObjectAttributeAccesses", this.msdyn_workordertype_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_workordertype_ProcessSession", this.msdyn_workordertype_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_workordertype_SyncErrors", this.msdyn_workordertype_SyncErrors);
        writer.writeStringValue("msdyn_workordertypeid", this.msdyn_workordertypeid);
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
