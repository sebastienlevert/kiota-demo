import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_purchaseorderbillFromDiscriminatorValue} from './createMsdyn_purchaseorderbillFromDiscriminatorValue';
import {createMsdyn_rmaFromDiscriminatorValue} from './createMsdyn_rmaFromDiscriminatorValue';
import {createMsdyn_rtvFromDiscriminatorValue} from './createMsdyn_rtvFromDiscriminatorValue';
import {createMsdyn_taxcodedetailFromDiscriminatorValue} from './createMsdyn_taxcodedetailFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_actual, Msdyn_agreement, Msdyn_purchaseorderbill, Msdyn_rma, Msdyn_rtv, Msdyn_taxcodedetail, Msdyn_workorder, Principal, Principalobjectattributeaccess, Processsession, Quotedetail, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_taxcode extends Crmbaseentity implements Parsable {
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
    private _msdyn_actastaxgroup?: boolean | undefined;
    private _msdyn_agreementtaxable?: boolean | undefined;
    private _msdyn_msdyn_taxcode_account_SalesTaxCode?: Account[] | undefined;
    private _msdyn_msdyn_taxcode_msdyn_actual_TaxCode?: Msdyn_actual[] | undefined;
    private _msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode?: Msdyn_agreement[] | undefined;
    private _msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode?: Msdyn_purchaseorderbill[] | undefined;
    private _msdyn_msdyn_taxcode_msdyn_rma_TaxCode?: Msdyn_rma[] | undefined;
    private _msdyn_msdyn_taxcode_msdyn_rtv_TaxCode?: Msdyn_rtv[] | undefined;
    private _msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode?: Msdyn_taxcodedetail[] | undefined;
    private _msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode?: Msdyn_taxcodedetail[] | undefined;
    private _msdyn_msdyn_taxcode_msdyn_workorder_TaxCode?: Msdyn_workorder[] | undefined;
    private _msdyn_msdyn_taxcode_quotedetail_SalesTaxCode?: Quotedetail[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_productstaxable?: boolean | undefined;
    private _msdyn_servicestaxable?: boolean | undefined;
    private _msdyn_taxcode_Annotations?: Annotation[] | undefined;
    private _msdyn_taxcode_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_taxcode_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_taxcode_connections1?: Connection[] | undefined;
    private _msdyn_taxcode_connections2?: Connection[] | undefined;
    private _msdyn_taxcode_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_taxcode_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_taxcode_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_taxcode_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_taxcode_ProcessSession?: Processsession[] | undefined;
    private _msdyn_taxcode_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_taxcodeid?: string | undefined;
    private _msdyn_taxrate?: number | undefined;
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
     * Instantiates a new msdyn_taxcode and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_taxcode)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_taxcode)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_taxcode)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_taxcode)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_taxcode)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_taxcode)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_taxcode)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_taxcode)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_taxcode).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_taxcode).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_taxcode).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_taxcode).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_taxcode).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_taxcode).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_taxcode).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actastaxgroup": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_actastaxgroup = n.getBooleanValue(); },
            "msdyn_agreementtaxable": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_agreementtaxable = n.getBooleanValue(); },
            "msdyn_msdyn_taxcode_account_SalesTaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_account_SalesTaxCode = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_msdyn_taxcode_msdyn_actual_TaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_msdyn_actual_TaxCode = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode = n.getCollectionOfObjectValues<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode = n.getCollectionOfObjectValues<Msdyn_purchaseorderbill>(createMsdyn_purchaseorderbillFromDiscriminatorValue); },
            "msdyn_msdyn_taxcode_msdyn_rma_TaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_msdyn_rma_TaxCode = n.getCollectionOfObjectValues<Msdyn_rma>(createMsdyn_rmaFromDiscriminatorValue); },
            "msdyn_msdyn_taxcode_msdyn_rtv_TaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_msdyn_rtv_TaxCode = n.getCollectionOfObjectValues<Msdyn_rtv>(createMsdyn_rtvFromDiscriminatorValue); },
            "msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode = n.getCollectionOfObjectValues<Msdyn_taxcodedetail>(createMsdyn_taxcodedetailFromDiscriminatorValue); },
            "msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode = n.getCollectionOfObjectValues<Msdyn_taxcodedetail>(createMsdyn_taxcodedetailFromDiscriminatorValue); },
            "msdyn_msdyn_taxcode_msdyn_workorder_TaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_msdyn_workorder_TaxCode = n.getCollectionOfObjectValues<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "msdyn_msdyn_taxcode_quotedetail_SalesTaxCode": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_msdyn_taxcode_quotedetail_SalesTaxCode = n.getCollectionOfObjectValues<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_name = n.getStringValue(); },
            "msdyn_productstaxable": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_productstaxable = n.getBooleanValue(); },
            "msdyn_servicestaxable": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_servicestaxable = n.getBooleanValue(); },
            "msdyn_taxcode_Annotations": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_taxcode_AsyncOperations": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_taxcode_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_taxcode_connections1": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_taxcode_connections2": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_taxcode_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_taxcode_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_taxcode_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_taxcode_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_taxcode_ProcessSession": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_taxcode_SyncErrors": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcode_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_taxcodeid": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxcodeid = n.getStringValue(); },
            "msdyn_taxrate": (o, n) => { (o as unknown as Msdyn_taxcode).msdyn_taxrate = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_taxcode).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_taxcode).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_taxcode).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_taxcode).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_taxcode).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_taxcode).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_taxcode).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_taxcode).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_taxcode).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_taxcode).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_actastaxgroup property value. 
     * @returns a boolean
     */
    public get msdyn_actastaxgroup() {
        return this._msdyn_actastaxgroup;
    };
    /**
     * Sets the msdyn_actastaxgroup property value. 
     * @param value Value to set for the msdyn_actastaxgroup property.
     */
    public set msdyn_actastaxgroup(value: boolean | undefined) {
        this._msdyn_actastaxgroup = value;
    };
    /**
     * Gets the msdyn_agreementtaxable property value. 
     * @returns a boolean
     */
    public get msdyn_agreementtaxable() {
        return this._msdyn_agreementtaxable;
    };
    /**
     * Sets the msdyn_agreementtaxable property value. 
     * @param value Value to set for the msdyn_agreementtaxable property.
     */
    public set msdyn_agreementtaxable(value: boolean | undefined) {
        this._msdyn_agreementtaxable = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_account_SalesTaxCode property value. 
     * @returns a account
     */
    public get msdyn_msdyn_taxcode_account_SalesTaxCode() {
        return this._msdyn_msdyn_taxcode_account_SalesTaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_account_SalesTaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_account_SalesTaxCode property.
     */
    public set msdyn_msdyn_taxcode_account_SalesTaxCode(value: Account[] | undefined) {
        this._msdyn_msdyn_taxcode_account_SalesTaxCode = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_msdyn_actual_TaxCode property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_msdyn_taxcode_msdyn_actual_TaxCode() {
        return this._msdyn_msdyn_taxcode_msdyn_actual_TaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_msdyn_actual_TaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_msdyn_actual_TaxCode property.
     */
    public set msdyn_msdyn_taxcode_msdyn_actual_TaxCode(value: Msdyn_actual[] | undefined) {
        this._msdyn_msdyn_taxcode_msdyn_actual_TaxCode = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode property value. 
     * @returns a msdyn_agreement
     */
    public get msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode() {
        return this._msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode property.
     */
    public set msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode(value: Msdyn_agreement[] | undefined) {
        this._msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode property value. 
     * @returns a msdyn_purchaseorderbill
     */
    public get msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode() {
        return this._msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode property.
     */
    public set msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode(value: Msdyn_purchaseorderbill[] | undefined) {
        this._msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_msdyn_rma_TaxCode property value. 
     * @returns a msdyn_rma
     */
    public get msdyn_msdyn_taxcode_msdyn_rma_TaxCode() {
        return this._msdyn_msdyn_taxcode_msdyn_rma_TaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_msdyn_rma_TaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_msdyn_rma_TaxCode property.
     */
    public set msdyn_msdyn_taxcode_msdyn_rma_TaxCode(value: Msdyn_rma[] | undefined) {
        this._msdyn_msdyn_taxcode_msdyn_rma_TaxCode = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_msdyn_rtv_TaxCode property value. 
     * @returns a msdyn_rtv
     */
    public get msdyn_msdyn_taxcode_msdyn_rtv_TaxCode() {
        return this._msdyn_msdyn_taxcode_msdyn_rtv_TaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_msdyn_rtv_TaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_msdyn_rtv_TaxCode property.
     */
    public set msdyn_msdyn_taxcode_msdyn_rtv_TaxCode(value: Msdyn_rtv[] | undefined) {
        this._msdyn_msdyn_taxcode_msdyn_rtv_TaxCode = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode property value. 
     * @returns a msdyn_taxcodedetail
     */
    public get msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode() {
        return this._msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode property.
     */
    public set msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode(value: Msdyn_taxcodedetail[] | undefined) {
        this._msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode property value. 
     * @returns a msdyn_taxcodedetail
     */
    public get msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode() {
        return this._msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode property.
     */
    public set msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode(value: Msdyn_taxcodedetail[] | undefined) {
        this._msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_msdyn_workorder_TaxCode property value. 
     * @returns a msdyn_workorder
     */
    public get msdyn_msdyn_taxcode_msdyn_workorder_TaxCode() {
        return this._msdyn_msdyn_taxcode_msdyn_workorder_TaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_msdyn_workorder_TaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_msdyn_workorder_TaxCode property.
     */
    public set msdyn_msdyn_taxcode_msdyn_workorder_TaxCode(value: Msdyn_workorder[] | undefined) {
        this._msdyn_msdyn_taxcode_msdyn_workorder_TaxCode = value;
    };
    /**
     * Gets the msdyn_msdyn_taxcode_quotedetail_SalesTaxCode property value. 
     * @returns a quotedetail
     */
    public get msdyn_msdyn_taxcode_quotedetail_SalesTaxCode() {
        return this._msdyn_msdyn_taxcode_quotedetail_SalesTaxCode;
    };
    /**
     * Sets the msdyn_msdyn_taxcode_quotedetail_SalesTaxCode property value. 
     * @param value Value to set for the msdyn_msdyn_taxcode_quotedetail_SalesTaxCode property.
     */
    public set msdyn_msdyn_taxcode_quotedetail_SalesTaxCode(value: Quotedetail[] | undefined) {
        this._msdyn_msdyn_taxcode_quotedetail_SalesTaxCode = value;
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
     * Gets the msdyn_productstaxable property value. 
     * @returns a boolean
     */
    public get msdyn_productstaxable() {
        return this._msdyn_productstaxable;
    };
    /**
     * Sets the msdyn_productstaxable property value. 
     * @param value Value to set for the msdyn_productstaxable property.
     */
    public set msdyn_productstaxable(value: boolean | undefined) {
        this._msdyn_productstaxable = value;
    };
    /**
     * Gets the msdyn_servicestaxable property value. 
     * @returns a boolean
     */
    public get msdyn_servicestaxable() {
        return this._msdyn_servicestaxable;
    };
    /**
     * Sets the msdyn_servicestaxable property value. 
     * @param value Value to set for the msdyn_servicestaxable property.
     */
    public set msdyn_servicestaxable(value: boolean | undefined) {
        this._msdyn_servicestaxable = value;
    };
    /**
     * Gets the msdyn_taxcode_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_taxcode_Annotations() {
        return this._msdyn_taxcode_Annotations;
    };
    /**
     * Sets the msdyn_taxcode_Annotations property value. 
     * @param value Value to set for the msdyn_taxcode_Annotations property.
     */
    public set msdyn_taxcode_Annotations(value: Annotation[] | undefined) {
        this._msdyn_taxcode_Annotations = value;
    };
    /**
     * Gets the msdyn_taxcode_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_taxcode_AsyncOperations() {
        return this._msdyn_taxcode_AsyncOperations;
    };
    /**
     * Sets the msdyn_taxcode_AsyncOperations property value. 
     * @param value Value to set for the msdyn_taxcode_AsyncOperations property.
     */
    public set msdyn_taxcode_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_taxcode_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_taxcode_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_taxcode_BulkDeleteFailures() {
        return this._msdyn_taxcode_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_taxcode_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_taxcode_BulkDeleteFailures property.
     */
    public set msdyn_taxcode_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_taxcode_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_taxcode_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_taxcode_connections1() {
        return this._msdyn_taxcode_connections1;
    };
    /**
     * Sets the msdyn_taxcode_connections1 property value. 
     * @param value Value to set for the msdyn_taxcode_connections1 property.
     */
    public set msdyn_taxcode_connections1(value: Connection[] | undefined) {
        this._msdyn_taxcode_connections1 = value;
    };
    /**
     * Gets the msdyn_taxcode_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_taxcode_connections2() {
        return this._msdyn_taxcode_connections2;
    };
    /**
     * Sets the msdyn_taxcode_connections2 property value. 
     * @param value Value to set for the msdyn_taxcode_connections2 property.
     */
    public set msdyn_taxcode_connections2(value: Connection[] | undefined) {
        this._msdyn_taxcode_connections2 = value;
    };
    /**
     * Gets the msdyn_taxcode_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_taxcode_DuplicateBaseRecord() {
        return this._msdyn_taxcode_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_taxcode_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_taxcode_DuplicateBaseRecord property.
     */
    public set msdyn_taxcode_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_taxcode_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_taxcode_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_taxcode_DuplicateMatchingRecord() {
        return this._msdyn_taxcode_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_taxcode_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_taxcode_DuplicateMatchingRecord property.
     */
    public set msdyn_taxcode_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_taxcode_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_taxcode_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_taxcode_MailboxTrackingFolders() {
        return this._msdyn_taxcode_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_taxcode_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_taxcode_MailboxTrackingFolders property.
     */
    public set msdyn_taxcode_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_taxcode_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_taxcode_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_taxcode_PrincipalObjectAttributeAccesses() {
        return this._msdyn_taxcode_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_taxcode_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_taxcode_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_taxcode_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_taxcode_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_taxcode_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_taxcode_ProcessSession() {
        return this._msdyn_taxcode_ProcessSession;
    };
    /**
     * Sets the msdyn_taxcode_ProcessSession property value. 
     * @param value Value to set for the msdyn_taxcode_ProcessSession property.
     */
    public set msdyn_taxcode_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_taxcode_ProcessSession = value;
    };
    /**
     * Gets the msdyn_taxcode_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_taxcode_SyncErrors() {
        return this._msdyn_taxcode_SyncErrors;
    };
    /**
     * Sets the msdyn_taxcode_SyncErrors property value. 
     * @param value Value to set for the msdyn_taxcode_SyncErrors property.
     */
    public set msdyn_taxcode_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_taxcode_SyncErrors = value;
    };
    /**
     * Gets the msdyn_taxcodeid property value. 
     * @returns a string
     */
    public get msdyn_taxcodeid() {
        return this._msdyn_taxcodeid;
    };
    /**
     * Sets the msdyn_taxcodeid property value. 
     * @param value Value to set for the msdyn_taxcodeid property.
     */
    public set msdyn_taxcodeid(value: string | undefined) {
        this._msdyn_taxcodeid = value;
    };
    /**
     * Gets the msdyn_taxrate property value. 
     * @returns a double
     */
    public get msdyn_taxrate() {
        return this._msdyn_taxrate;
    };
    /**
     * Sets the msdyn_taxrate property value. 
     * @param value Value to set for the msdyn_taxrate property.
     */
    public set msdyn_taxrate(value: number | undefined) {
        this._msdyn_taxrate = value;
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
        writer.writeBooleanValue("msdyn_actastaxgroup", this.msdyn_actastaxgroup);
        writer.writeBooleanValue("msdyn_agreementtaxable", this.msdyn_agreementtaxable);
        writer.writeCollectionOfObjectValues<Account>("msdyn_msdyn_taxcode_account_SalesTaxCode", this.msdyn_msdyn_taxcode_account_SalesTaxCode);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_msdyn_taxcode_msdyn_actual_TaxCode", this.msdyn_msdyn_taxcode_msdyn_actual_TaxCode);
        writer.writeCollectionOfObjectValues<Msdyn_agreement>("msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode", this.msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode);
        writer.writeCollectionOfObjectValues<Msdyn_purchaseorderbill>("msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode", this.msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode);
        writer.writeCollectionOfObjectValues<Msdyn_rma>("msdyn_msdyn_taxcode_msdyn_rma_TaxCode", this.msdyn_msdyn_taxcode_msdyn_rma_TaxCode);
        writer.writeCollectionOfObjectValues<Msdyn_rtv>("msdyn_msdyn_taxcode_msdyn_rtv_TaxCode", this.msdyn_msdyn_taxcode_msdyn_rtv_TaxCode);
        writer.writeCollectionOfObjectValues<Msdyn_taxcodedetail>("msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode", this.msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode);
        writer.writeCollectionOfObjectValues<Msdyn_taxcodedetail>("msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode", this.msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode);
        writer.writeCollectionOfObjectValues<Msdyn_workorder>("msdyn_msdyn_taxcode_msdyn_workorder_TaxCode", this.msdyn_msdyn_taxcode_msdyn_workorder_TaxCode);
        writer.writeCollectionOfObjectValues<Quotedetail>("msdyn_msdyn_taxcode_quotedetail_SalesTaxCode", this.msdyn_msdyn_taxcode_quotedetail_SalesTaxCode);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeBooleanValue("msdyn_productstaxable", this.msdyn_productstaxable);
        writer.writeBooleanValue("msdyn_servicestaxable", this.msdyn_servicestaxable);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_taxcode_Annotations", this.msdyn_taxcode_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_taxcode_AsyncOperations", this.msdyn_taxcode_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_taxcode_BulkDeleteFailures", this.msdyn_taxcode_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_taxcode_connections1", this.msdyn_taxcode_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_taxcode_connections2", this.msdyn_taxcode_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_taxcode_DuplicateBaseRecord", this.msdyn_taxcode_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_taxcode_DuplicateMatchingRecord", this.msdyn_taxcode_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_taxcode_MailboxTrackingFolders", this.msdyn_taxcode_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_taxcode_PrincipalObjectAttributeAccesses", this.msdyn_taxcode_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_taxcode_ProcessSession", this.msdyn_taxcode_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_taxcode_SyncErrors", this.msdyn_taxcode_SyncErrors);
        writer.writeStringValue("msdyn_taxcodeid", this.msdyn_taxcodeid);
        writer.writeNumberValue("msdyn_taxrate", this.msdyn_taxrate);
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
