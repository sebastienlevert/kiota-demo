import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_journalFromDiscriminatorValue} from './createMsdyn_journalFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createMsdyn_projectapprovalFromDiscriminatorValue} from './createMsdyn_projectapprovalFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {createUomscheduleFromDiscriminatorValue} from './createUomscheduleFromDiscriminatorValue';
import {Account, Annotation, Asyncoperation, Bookableresource, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Contact, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_journal, Msdyn_organizationalunit, Msdyn_project, Msdyn_projectapproval, Msdyn_projecttask, Msdyn_transactioncategory, Pricelevel, Principal, Principalobjectattributeaccess, Processsession, Product, Salesorder, Salesorderdetail, Syncerror, Systemuser, Team, Transactioncurrency, Uom, Uomschedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_journalline extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_accountcustomer_value?: string | undefined;
    private __msdyn_accountvendor_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_contactcustomer_value?: string | undefined;
    private __msdyn_contactvendor_value?: string | undefined;
    private __msdyn_contractorganizationalunitid_value?: string | undefined;
    private __msdyn_journal_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
    private __msdyn_resourceorganizationalunitid_value?: string | undefined;
    private __msdyn_salescontract_value?: string | undefined;
    private __msdyn_salescontractlineid_value?: string | undefined;
    private __msdyn_task_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __msdyn_unitschedule_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_AccountCustomer?: Account | undefined;
    private _msdyn_accountingdate?: Date | undefined;
    private _msdyn_AccountVendor?: Account | undefined;
    private _msdyn_amount?: number | undefined;
    private _msdyn_amount_base?: number | undefined;
    private _msdyn_amountmethod?: number | undefined;
    private _msdyn_basisamount?: number | undefined;
    private _msdyn_basisamount_base?: number | undefined;
    private _msdyn_basisprice?: number | undefined;
    private _msdyn_basisprice_base?: number | undefined;
    private _msdyn_basisquantity?: number | undefined;
    private _msdyn_billingstatus?: number | undefined;
    private _msdyn_billingtype?: number | undefined;
    private _msdyn_bookableresource?: Bookableresource | undefined;
    private _msdyn_ContactCustomer?: Contact | undefined;
    private _msdyn_ContactVendor?: Contact | undefined;
    private _msdyn_contractorganizationalunitid?: Msdyn_organizationalunit | undefined;
    private _msdyn_customertype?: number | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_documentdate?: Date | undefined;
    private _msdyn_enddatetime?: Date | undefined;
    private _msdyn_exchangeratedate?: Date | undefined;
    private _msdyn_externaldescription?: string | undefined;
    private _msdyn_isposted?: boolean | undefined;
    private _msdyn_Journal?: Msdyn_journal | undefined;
    private _msdyn_journalline_Annotations?: Annotation[] | undefined;
    private _msdyn_journalline_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_journalline_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_journalline_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_journalline_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_journalline_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_journalline_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_journalline_ProcessSession?: Processsession[] | undefined;
    private _msdyn_journalline_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_journallineid?: string | undefined;
    private _msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline?: Msdyn_projectapproval[] | undefined;
    private _msdyn_percent?: number | undefined;
    private _msdyn_price?: number | undefined;
    private _msdyn_price_base?: number | undefined;
    private _msdyn_PriceList?: Pricelevel | undefined;
    private _msdyn_Product?: Product | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_quantity?: number | undefined;
    private _msdyn_ResourceCategory?: Bookableresourcecategory | undefined;
    private _msdyn_ResourceOrganizationalUnitId?: Msdyn_organizationalunit | undefined;
    private _msdyn_SalesContract?: Salesorder | undefined;
    private _msdyn_salescontractline?: string | undefined;
    private _msdyn_SalesContractLineId?: Salesorderdetail | undefined;
    private _msdyn_startdatetime?: Date | undefined;
    private _msdyn_Task?: Msdyn_projecttask | undefined;
    private _msdyn_TransactionCategory?: Msdyn_transactioncategory | undefined;
    private _msdyn_transactionclassification?: number | undefined;
    private _msdyn_transactiontypecode?: number | undefined;
    private _msdyn_Unit?: Uom | undefined;
    private _msdyn_UnitSchedule?: Uomschedule | undefined;
    private _msdyn_vendortype?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _msdyn_accountcustomer_value property value. 
     * @returns a string
     */
    public get _msdyn_accountcustomer_value() {
        return this.__msdyn_accountcustomer_value;
    };
    /**
     * Sets the _msdyn_accountcustomer_value property value. 
     * @param value Value to set for the _msdyn_accountcustomer_value property.
     */
    public set _msdyn_accountcustomer_value(value: string | undefined) {
        this.__msdyn_accountcustomer_value = value;
    };
    /**
     * Gets the _msdyn_accountvendor_value property value. 
     * @returns a string
     */
    public get _msdyn_accountvendor_value() {
        return this.__msdyn_accountvendor_value;
    };
    /**
     * Sets the _msdyn_accountvendor_value property value. 
     * @param value Value to set for the _msdyn_accountvendor_value property.
     */
    public set _msdyn_accountvendor_value(value: string | undefined) {
        this.__msdyn_accountvendor_value = value;
    };
    /**
     * Gets the _msdyn_bookableresource_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresource_value() {
        return this.__msdyn_bookableresource_value;
    };
    /**
     * Sets the _msdyn_bookableresource_value property value. 
     * @param value Value to set for the _msdyn_bookableresource_value property.
     */
    public set _msdyn_bookableresource_value(value: string | undefined) {
        this.__msdyn_bookableresource_value = value;
    };
    /**
     * Gets the _msdyn_contactcustomer_value property value. 
     * @returns a string
     */
    public get _msdyn_contactcustomer_value() {
        return this.__msdyn_contactcustomer_value;
    };
    /**
     * Sets the _msdyn_contactcustomer_value property value. 
     * @param value Value to set for the _msdyn_contactcustomer_value property.
     */
    public set _msdyn_contactcustomer_value(value: string | undefined) {
        this.__msdyn_contactcustomer_value = value;
    };
    /**
     * Gets the _msdyn_contactvendor_value property value. 
     * @returns a string
     */
    public get _msdyn_contactvendor_value() {
        return this.__msdyn_contactvendor_value;
    };
    /**
     * Sets the _msdyn_contactvendor_value property value. 
     * @param value Value to set for the _msdyn_contactvendor_value property.
     */
    public set _msdyn_contactvendor_value(value: string | undefined) {
        this.__msdyn_contactvendor_value = value;
    };
    /**
     * Gets the _msdyn_contractorganizationalunitid_value property value. 
     * @returns a string
     */
    public get _msdyn_contractorganizationalunitid_value() {
        return this.__msdyn_contractorganizationalunitid_value;
    };
    /**
     * Sets the _msdyn_contractorganizationalunitid_value property value. 
     * @param value Value to set for the _msdyn_contractorganizationalunitid_value property.
     */
    public set _msdyn_contractorganizationalunitid_value(value: string | undefined) {
        this.__msdyn_contractorganizationalunitid_value = value;
    };
    /**
     * Gets the _msdyn_journal_value property value. 
     * @returns a string
     */
    public get _msdyn_journal_value() {
        return this.__msdyn_journal_value;
    };
    /**
     * Sets the _msdyn_journal_value property value. 
     * @param value Value to set for the _msdyn_journal_value property.
     */
    public set _msdyn_journal_value(value: string | undefined) {
        this.__msdyn_journal_value = value;
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
     * Gets the _msdyn_product_value property value. 
     * @returns a string
     */
    public get _msdyn_product_value() {
        return this.__msdyn_product_value;
    };
    /**
     * Sets the _msdyn_product_value property value. 
     * @param value Value to set for the _msdyn_product_value property.
     */
    public set _msdyn_product_value(value: string | undefined) {
        this.__msdyn_product_value = value;
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
     * Gets the _msdyn_resourcecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecategory_value() {
        return this.__msdyn_resourcecategory_value;
    };
    /**
     * Sets the _msdyn_resourcecategory_value property value. 
     * @param value Value to set for the _msdyn_resourcecategory_value property.
     */
    public set _msdyn_resourcecategory_value(value: string | undefined) {
        this.__msdyn_resourcecategory_value = value;
    };
    /**
     * Gets the _msdyn_resourceorganizationalunitid_value property value. 
     * @returns a string
     */
    public get _msdyn_resourceorganizationalunitid_value() {
        return this.__msdyn_resourceorganizationalunitid_value;
    };
    /**
     * Sets the _msdyn_resourceorganizationalunitid_value property value. 
     * @param value Value to set for the _msdyn_resourceorganizationalunitid_value property.
     */
    public set _msdyn_resourceorganizationalunitid_value(value: string | undefined) {
        this.__msdyn_resourceorganizationalunitid_value = value;
    };
    /**
     * Gets the _msdyn_salescontract_value property value. 
     * @returns a string
     */
    public get _msdyn_salescontract_value() {
        return this.__msdyn_salescontract_value;
    };
    /**
     * Sets the _msdyn_salescontract_value property value. 
     * @param value Value to set for the _msdyn_salescontract_value property.
     */
    public set _msdyn_salescontract_value(value: string | undefined) {
        this.__msdyn_salescontract_value = value;
    };
    /**
     * Gets the _msdyn_salescontractlineid_value property value. 
     * @returns a string
     */
    public get _msdyn_salescontractlineid_value() {
        return this.__msdyn_salescontractlineid_value;
    };
    /**
     * Sets the _msdyn_salescontractlineid_value property value. 
     * @param value Value to set for the _msdyn_salescontractlineid_value property.
     */
    public set _msdyn_salescontractlineid_value(value: string | undefined) {
        this.__msdyn_salescontractlineid_value = value;
    };
    /**
     * Gets the _msdyn_task_value property value. 
     * @returns a string
     */
    public get _msdyn_task_value() {
        return this.__msdyn_task_value;
    };
    /**
     * Sets the _msdyn_task_value property value. 
     * @param value Value to set for the _msdyn_task_value property.
     */
    public set _msdyn_task_value(value: string | undefined) {
        this.__msdyn_task_value = value;
    };
    /**
     * Gets the _msdyn_transactioncategory_value property value. 
     * @returns a string
     */
    public get _msdyn_transactioncategory_value() {
        return this.__msdyn_transactioncategory_value;
    };
    /**
     * Sets the _msdyn_transactioncategory_value property value. 
     * @param value Value to set for the _msdyn_transactioncategory_value property.
     */
    public set _msdyn_transactioncategory_value(value: string | undefined) {
        this.__msdyn_transactioncategory_value = value;
    };
    /**
     * Gets the _msdyn_unit_value property value. 
     * @returns a string
     */
    public get _msdyn_unit_value() {
        return this.__msdyn_unit_value;
    };
    /**
     * Sets the _msdyn_unit_value property value. 
     * @param value Value to set for the _msdyn_unit_value property.
     */
    public set _msdyn_unit_value(value: string | undefined) {
        this.__msdyn_unit_value = value;
    };
    /**
     * Gets the _msdyn_unitschedule_value property value. 
     * @returns a string
     */
    public get _msdyn_unitschedule_value() {
        return this.__msdyn_unitschedule_value;
    };
    /**
     * Sets the _msdyn_unitschedule_value property value. 
     * @param value Value to set for the _msdyn_unitschedule_value property.
     */
    public set _msdyn_unitschedule_value(value: string | undefined) {
        this.__msdyn_unitschedule_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new msdyn_journalline and sets the default values.
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_journalline)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_journalline)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_journalline)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_journalline)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_accountcustomer_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_accountcustomer_value = n.getStringValue(); },
            "_msdyn_accountvendor_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_accountvendor_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_contactcustomer_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_contactcustomer_value = n.getStringValue(); },
            "_msdyn_contactvendor_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_contactvendor_value = n.getStringValue(); },
            "_msdyn_contractorganizationalunitid_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_contractorganizationalunitid_value = n.getStringValue(); },
            "_msdyn_journal_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_journal_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_resourceorganizationalunitid_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_resourceorganizationalunitid_value = n.getStringValue(); },
            "_msdyn_salescontract_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_salescontract_value = n.getStringValue(); },
            "_msdyn_salescontractlineid_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_salescontractlineid_value = n.getStringValue(); },
            "_msdyn_task_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_task_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_unit_value = n.getStringValue(); },
            "_msdyn_unitschedule_value": (o, n) => { (o as unknown as Msdyn_journalline)._msdyn_unitschedule_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_journalline)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_journalline)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_journalline)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_journalline)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_journalline)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_journalline).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_journalline).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_journalline).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_journalline).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_journalline).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_journalline).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_journalline).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_journalline).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_AccountCustomer": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_AccountCustomer = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_accountingdate": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_accountingdate = n.getDateValue(); },
            "msdyn_AccountVendor": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_AccountVendor = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_amount": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_amount = n.getNumberValue(); },
            "msdyn_amount_base": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_amount_base = n.getNumberValue(); },
            "msdyn_amountmethod": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_amountmethod = n.getNumberValue(); },
            "msdyn_basisamount": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_basisamount = n.getNumberValue(); },
            "msdyn_basisamount_base": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_basisamount_base = n.getNumberValue(); },
            "msdyn_basisprice": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_basisprice = n.getNumberValue(); },
            "msdyn_basisprice_base": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_basisprice_base = n.getNumberValue(); },
            "msdyn_basisquantity": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_basisquantity = n.getNumberValue(); },
            "msdyn_billingstatus": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_billingstatus = n.getNumberValue(); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_bookableresource": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_bookableresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_ContactCustomer": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_ContactCustomer = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "msdyn_ContactVendor": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_ContactVendor = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "msdyn_contractorganizationalunitid": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_contractorganizationalunitid = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_customertype": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_customertype = n.getNumberValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_description = n.getStringValue(); },
            "msdyn_documentdate": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_documentdate = n.getDateValue(); },
            "msdyn_enddatetime": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_enddatetime = n.getDateValue(); },
            "msdyn_exchangeratedate": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_exchangeratedate = n.getDateValue(); },
            "msdyn_externaldescription": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_externaldescription = n.getStringValue(); },
            "msdyn_isposted": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_isposted = n.getBooleanValue(); },
            "msdyn_Journal": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_Journal = n.getObjectValue<Msdyn_journal>(createMsdyn_journalFromDiscriminatorValue); },
            "msdyn_journalline_Annotations": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journalline_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_journalline_AsyncOperations": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journalline_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_journalline_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journalline_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_journalline_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journalline_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_journalline_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journalline_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_journalline_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journalline_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_journalline_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journalline_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_journalline_ProcessSession": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journalline_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_journalline_SyncErrors": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journalline_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_journallineid": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_journallineid = n.getStringValue(); },
            "msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline = n.getCollectionOfObjectValues<Msdyn_projectapproval>(createMsdyn_projectapprovalFromDiscriminatorValue); },
            "msdyn_percent": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_percent = n.getNumberValue(); },
            "msdyn_price": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_price = n.getNumberValue(); },
            "msdyn_price_base": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_price_base = n.getNumberValue(); },
            "msdyn_PriceList": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_PriceList = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_Product": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_Product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_Project": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_quantity": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_quantity = n.getNumberValue(); },
            "msdyn_ResourceCategory": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_ResourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_ResourceOrganizationalUnitId": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_ResourceOrganizationalUnitId = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_SalesContract": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_SalesContract = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "msdyn_salescontractline": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_salescontractline = n.getStringValue(); },
            "msdyn_SalesContractLineId": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_SalesContractLineId = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_startdatetime": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_startdatetime = n.getDateValue(); },
            "msdyn_Task": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_Task = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_TransactionCategory": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_TransactionCategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_transactionclassification = n.getNumberValue(); },
            "msdyn_transactiontypecode": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_transactiontypecode = n.getNumberValue(); },
            "msdyn_Unit": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_Unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_UnitSchedule": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_UnitSchedule = n.getObjectValue<Uomschedule>(createUomscheduleFromDiscriminatorValue); },
            "msdyn_vendortype": (o, n) => { (o as unknown as Msdyn_journalline).msdyn_vendortype = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_journalline).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_journalline).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_journalline).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_journalline).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_journalline).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_journalline).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_journalline).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_journalline).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_journalline).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_journalline).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_journalline).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_AccountCustomer property value. 
     * @returns a account
     */
    public get msdyn_AccountCustomer() {
        return this._msdyn_AccountCustomer;
    };
    /**
     * Sets the msdyn_AccountCustomer property value. 
     * @param value Value to set for the msdyn_AccountCustomer property.
     */
    public set msdyn_AccountCustomer(value: Account | undefined) {
        this._msdyn_AccountCustomer = value;
    };
    /**
     * Gets the msdyn_accountingdate property value. 
     * @returns a Date
     */
    public get msdyn_accountingdate() {
        return this._msdyn_accountingdate;
    };
    /**
     * Sets the msdyn_accountingdate property value. 
     * @param value Value to set for the msdyn_accountingdate property.
     */
    public set msdyn_accountingdate(value: Date | undefined) {
        this._msdyn_accountingdate = value;
    };
    /**
     * Gets the msdyn_AccountVendor property value. 
     * @returns a account
     */
    public get msdyn_AccountVendor() {
        return this._msdyn_AccountVendor;
    };
    /**
     * Sets the msdyn_AccountVendor property value. 
     * @param value Value to set for the msdyn_AccountVendor property.
     */
    public set msdyn_AccountVendor(value: Account | undefined) {
        this._msdyn_AccountVendor = value;
    };
    /**
     * Gets the msdyn_amount property value. 
     * @returns a int64
     */
    public get msdyn_amount() {
        return this._msdyn_amount;
    };
    /**
     * Sets the msdyn_amount property value. 
     * @param value Value to set for the msdyn_amount property.
     */
    public set msdyn_amount(value: number | undefined) {
        this._msdyn_amount = value;
    };
    /**
     * Gets the msdyn_amount_base property value. 
     * @returns a int64
     */
    public get msdyn_amount_base() {
        return this._msdyn_amount_base;
    };
    /**
     * Sets the msdyn_amount_base property value. 
     * @param value Value to set for the msdyn_amount_base property.
     */
    public set msdyn_amount_base(value: number | undefined) {
        this._msdyn_amount_base = value;
    };
    /**
     * Gets the msdyn_amountmethod property value. 
     * @returns a integer
     */
    public get msdyn_amountmethod() {
        return this._msdyn_amountmethod;
    };
    /**
     * Sets the msdyn_amountmethod property value. 
     * @param value Value to set for the msdyn_amountmethod property.
     */
    public set msdyn_amountmethod(value: number | undefined) {
        this._msdyn_amountmethod = value;
    };
    /**
     * Gets the msdyn_basisamount property value. 
     * @returns a int64
     */
    public get msdyn_basisamount() {
        return this._msdyn_basisamount;
    };
    /**
     * Sets the msdyn_basisamount property value. 
     * @param value Value to set for the msdyn_basisamount property.
     */
    public set msdyn_basisamount(value: number | undefined) {
        this._msdyn_basisamount = value;
    };
    /**
     * Gets the msdyn_basisamount_base property value. 
     * @returns a int64
     */
    public get msdyn_basisamount_base() {
        return this._msdyn_basisamount_base;
    };
    /**
     * Sets the msdyn_basisamount_base property value. 
     * @param value Value to set for the msdyn_basisamount_base property.
     */
    public set msdyn_basisamount_base(value: number | undefined) {
        this._msdyn_basisamount_base = value;
    };
    /**
     * Gets the msdyn_basisprice property value. 
     * @returns a int64
     */
    public get msdyn_basisprice() {
        return this._msdyn_basisprice;
    };
    /**
     * Sets the msdyn_basisprice property value. 
     * @param value Value to set for the msdyn_basisprice property.
     */
    public set msdyn_basisprice(value: number | undefined) {
        this._msdyn_basisprice = value;
    };
    /**
     * Gets the msdyn_basisprice_base property value. 
     * @returns a int64
     */
    public get msdyn_basisprice_base() {
        return this._msdyn_basisprice_base;
    };
    /**
     * Sets the msdyn_basisprice_base property value. 
     * @param value Value to set for the msdyn_basisprice_base property.
     */
    public set msdyn_basisprice_base(value: number | undefined) {
        this._msdyn_basisprice_base = value;
    };
    /**
     * Gets the msdyn_basisquantity property value. 
     * @returns a int64
     */
    public get msdyn_basisquantity() {
        return this._msdyn_basisquantity;
    };
    /**
     * Sets the msdyn_basisquantity property value. 
     * @param value Value to set for the msdyn_basisquantity property.
     */
    public set msdyn_basisquantity(value: number | undefined) {
        this._msdyn_basisquantity = value;
    };
    /**
     * Gets the msdyn_billingstatus property value. 
     * @returns a integer
     */
    public get msdyn_billingstatus() {
        return this._msdyn_billingstatus;
    };
    /**
     * Sets the msdyn_billingstatus property value. 
     * @param value Value to set for the msdyn_billingstatus property.
     */
    public set msdyn_billingstatus(value: number | undefined) {
        this._msdyn_billingstatus = value;
    };
    /**
     * Gets the msdyn_billingtype property value. 
     * @returns a integer
     */
    public get msdyn_billingtype() {
        return this._msdyn_billingtype;
    };
    /**
     * Sets the msdyn_billingtype property value. 
     * @param value Value to set for the msdyn_billingtype property.
     */
    public set msdyn_billingtype(value: number | undefined) {
        this._msdyn_billingtype = value;
    };
    /**
     * Gets the msdyn_bookableresource property value. 
     * @returns a bookableresource
     */
    public get msdyn_bookableresource() {
        return this._msdyn_bookableresource;
    };
    /**
     * Sets the msdyn_bookableresource property value. 
     * @param value Value to set for the msdyn_bookableresource property.
     */
    public set msdyn_bookableresource(value: Bookableresource | undefined) {
        this._msdyn_bookableresource = value;
    };
    /**
     * Gets the msdyn_ContactCustomer property value. 
     * @returns a contact
     */
    public get msdyn_ContactCustomer() {
        return this._msdyn_ContactCustomer;
    };
    /**
     * Sets the msdyn_ContactCustomer property value. 
     * @param value Value to set for the msdyn_ContactCustomer property.
     */
    public set msdyn_ContactCustomer(value: Contact | undefined) {
        this._msdyn_ContactCustomer = value;
    };
    /**
     * Gets the msdyn_ContactVendor property value. 
     * @returns a contact
     */
    public get msdyn_ContactVendor() {
        return this._msdyn_ContactVendor;
    };
    /**
     * Sets the msdyn_ContactVendor property value. 
     * @param value Value to set for the msdyn_ContactVendor property.
     */
    public set msdyn_ContactVendor(value: Contact | undefined) {
        this._msdyn_ContactVendor = value;
    };
    /**
     * Gets the msdyn_contractorganizationalunitid property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_contractorganizationalunitid() {
        return this._msdyn_contractorganizationalunitid;
    };
    /**
     * Sets the msdyn_contractorganizationalunitid property value. 
     * @param value Value to set for the msdyn_contractorganizationalunitid property.
     */
    public set msdyn_contractorganizationalunitid(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_contractorganizationalunitid = value;
    };
    /**
     * Gets the msdyn_customertype property value. 
     * @returns a integer
     */
    public get msdyn_customertype() {
        return this._msdyn_customertype;
    };
    /**
     * Sets the msdyn_customertype property value. 
     * @param value Value to set for the msdyn_customertype property.
     */
    public set msdyn_customertype(value: number | undefined) {
        this._msdyn_customertype = value;
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
     * Gets the msdyn_documentdate property value. 
     * @returns a Date
     */
    public get msdyn_documentdate() {
        return this._msdyn_documentdate;
    };
    /**
     * Sets the msdyn_documentdate property value. 
     * @param value Value to set for the msdyn_documentdate property.
     */
    public set msdyn_documentdate(value: Date | undefined) {
        this._msdyn_documentdate = value;
    };
    /**
     * Gets the msdyn_enddatetime property value. 
     * @returns a Date
     */
    public get msdyn_enddatetime() {
        return this._msdyn_enddatetime;
    };
    /**
     * Sets the msdyn_enddatetime property value. 
     * @param value Value to set for the msdyn_enddatetime property.
     */
    public set msdyn_enddatetime(value: Date | undefined) {
        this._msdyn_enddatetime = value;
    };
    /**
     * Gets the msdyn_exchangeratedate property value. 
     * @returns a Date
     */
    public get msdyn_exchangeratedate() {
        return this._msdyn_exchangeratedate;
    };
    /**
     * Sets the msdyn_exchangeratedate property value. 
     * @param value Value to set for the msdyn_exchangeratedate property.
     */
    public set msdyn_exchangeratedate(value: Date | undefined) {
        this._msdyn_exchangeratedate = value;
    };
    /**
     * Gets the msdyn_externaldescription property value. 
     * @returns a string
     */
    public get msdyn_externaldescription() {
        return this._msdyn_externaldescription;
    };
    /**
     * Sets the msdyn_externaldescription property value. 
     * @param value Value to set for the msdyn_externaldescription property.
     */
    public set msdyn_externaldescription(value: string | undefined) {
        this._msdyn_externaldescription = value;
    };
    /**
     * Gets the msdyn_isposted property value. 
     * @returns a boolean
     */
    public get msdyn_isposted() {
        return this._msdyn_isposted;
    };
    /**
     * Sets the msdyn_isposted property value. 
     * @param value Value to set for the msdyn_isposted property.
     */
    public set msdyn_isposted(value: boolean | undefined) {
        this._msdyn_isposted = value;
    };
    /**
     * Gets the msdyn_Journal property value. 
     * @returns a msdyn_journal
     */
    public get msdyn_Journal() {
        return this._msdyn_Journal;
    };
    /**
     * Sets the msdyn_Journal property value. 
     * @param value Value to set for the msdyn_Journal property.
     */
    public set msdyn_Journal(value: Msdyn_journal | undefined) {
        this._msdyn_Journal = value;
    };
    /**
     * Gets the msdyn_journalline_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_journalline_Annotations() {
        return this._msdyn_journalline_Annotations;
    };
    /**
     * Sets the msdyn_journalline_Annotations property value. 
     * @param value Value to set for the msdyn_journalline_Annotations property.
     */
    public set msdyn_journalline_Annotations(value: Annotation[] | undefined) {
        this._msdyn_journalline_Annotations = value;
    };
    /**
     * Gets the msdyn_journalline_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_journalline_AsyncOperations() {
        return this._msdyn_journalline_AsyncOperations;
    };
    /**
     * Sets the msdyn_journalline_AsyncOperations property value. 
     * @param value Value to set for the msdyn_journalline_AsyncOperations property.
     */
    public set msdyn_journalline_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_journalline_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_journalline_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_journalline_BulkDeleteFailures() {
        return this._msdyn_journalline_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_journalline_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_journalline_BulkDeleteFailures property.
     */
    public set msdyn_journalline_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_journalline_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_journalline_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_journalline_DuplicateBaseRecord() {
        return this._msdyn_journalline_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_journalline_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_journalline_DuplicateBaseRecord property.
     */
    public set msdyn_journalline_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_journalline_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_journalline_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_journalline_DuplicateMatchingRecord() {
        return this._msdyn_journalline_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_journalline_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_journalline_DuplicateMatchingRecord property.
     */
    public set msdyn_journalline_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_journalline_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_journalline_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_journalline_MailboxTrackingFolders() {
        return this._msdyn_journalline_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_journalline_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_journalline_MailboxTrackingFolders property.
     */
    public set msdyn_journalline_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_journalline_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_journalline_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_journalline_PrincipalObjectAttributeAccesses() {
        return this._msdyn_journalline_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_journalline_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_journalline_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_journalline_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_journalline_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_journalline_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_journalline_ProcessSession() {
        return this._msdyn_journalline_ProcessSession;
    };
    /**
     * Sets the msdyn_journalline_ProcessSession property value. 
     * @param value Value to set for the msdyn_journalline_ProcessSession property.
     */
    public set msdyn_journalline_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_journalline_ProcessSession = value;
    };
    /**
     * Gets the msdyn_journalline_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_journalline_SyncErrors() {
        return this._msdyn_journalline_SyncErrors;
    };
    /**
     * Sets the msdyn_journalline_SyncErrors property value. 
     * @param value Value to set for the msdyn_journalline_SyncErrors property.
     */
    public set msdyn_journalline_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_journalline_SyncErrors = value;
    };
    /**
     * Gets the msdyn_journallineid property value. 
     * @returns a string
     */
    public get msdyn_journallineid() {
        return this._msdyn_journallineid;
    };
    /**
     * Sets the msdyn_journallineid property value. 
     * @param value Value to set for the msdyn_journallineid property.
     */
    public set msdyn_journallineid(value: string | undefined) {
        this._msdyn_journallineid = value;
    };
    /**
     * Gets the msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline property value. 
     * @returns a msdyn_projectapproval
     */
    public get msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline() {
        return this._msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline;
    };
    /**
     * Sets the msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline property value. 
     * @param value Value to set for the msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline property.
     */
    public set msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline(value: Msdyn_projectapproval[] | undefined) {
        this._msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline = value;
    };
    /**
     * Gets the msdyn_percent property value. 
     * @returns a int64
     */
    public get msdyn_percent() {
        return this._msdyn_percent;
    };
    /**
     * Sets the msdyn_percent property value. 
     * @param value Value to set for the msdyn_percent property.
     */
    public set msdyn_percent(value: number | undefined) {
        this._msdyn_percent = value;
    };
    /**
     * Gets the msdyn_price property value. 
     * @returns a int64
     */
    public get msdyn_price() {
        return this._msdyn_price;
    };
    /**
     * Sets the msdyn_price property value. 
     * @param value Value to set for the msdyn_price property.
     */
    public set msdyn_price(value: number | undefined) {
        this._msdyn_price = value;
    };
    /**
     * Gets the msdyn_price_base property value. 
     * @returns a int64
     */
    public get msdyn_price_base() {
        return this._msdyn_price_base;
    };
    /**
     * Sets the msdyn_price_base property value. 
     * @param value Value to set for the msdyn_price_base property.
     */
    public set msdyn_price_base(value: number | undefined) {
        this._msdyn_price_base = value;
    };
    /**
     * Gets the msdyn_PriceList property value. 
     * @returns a pricelevel
     */
    public get msdyn_PriceList() {
        return this._msdyn_PriceList;
    };
    /**
     * Sets the msdyn_PriceList property value. 
     * @param value Value to set for the msdyn_PriceList property.
     */
    public set msdyn_PriceList(value: Pricelevel | undefined) {
        this._msdyn_PriceList = value;
    };
    /**
     * Gets the msdyn_Product property value. 
     * @returns a product
     */
    public get msdyn_Product() {
        return this._msdyn_Product;
    };
    /**
     * Sets the msdyn_Product property value. 
     * @param value Value to set for the msdyn_Product property.
     */
    public set msdyn_Product(value: Product | undefined) {
        this._msdyn_Product = value;
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
     * Gets the msdyn_quantity property value. 
     * @returns a int64
     */
    public get msdyn_quantity() {
        return this._msdyn_quantity;
    };
    /**
     * Sets the msdyn_quantity property value. 
     * @param value Value to set for the msdyn_quantity property.
     */
    public set msdyn_quantity(value: number | undefined) {
        this._msdyn_quantity = value;
    };
    /**
     * Gets the msdyn_ResourceCategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_ResourceCategory() {
        return this._msdyn_ResourceCategory;
    };
    /**
     * Sets the msdyn_ResourceCategory property value. 
     * @param value Value to set for the msdyn_ResourceCategory property.
     */
    public set msdyn_ResourceCategory(value: Bookableresourcecategory | undefined) {
        this._msdyn_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_ResourceOrganizationalUnitId property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_ResourceOrganizationalUnitId() {
        return this._msdyn_ResourceOrganizationalUnitId;
    };
    /**
     * Sets the msdyn_ResourceOrganizationalUnitId property value. 
     * @param value Value to set for the msdyn_ResourceOrganizationalUnitId property.
     */
    public set msdyn_ResourceOrganizationalUnitId(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_ResourceOrganizationalUnitId = value;
    };
    /**
     * Gets the msdyn_SalesContract property value. 
     * @returns a salesorder
     */
    public get msdyn_SalesContract() {
        return this._msdyn_SalesContract;
    };
    /**
     * Sets the msdyn_SalesContract property value. 
     * @param value Value to set for the msdyn_SalesContract property.
     */
    public set msdyn_SalesContract(value: Salesorder | undefined) {
        this._msdyn_SalesContract = value;
    };
    /**
     * Gets the msdyn_salescontractline property value. 
     * @returns a string
     */
    public get msdyn_salescontractline() {
        return this._msdyn_salescontractline;
    };
    /**
     * Sets the msdyn_salescontractline property value. 
     * @param value Value to set for the msdyn_salescontractline property.
     */
    public set msdyn_salescontractline(value: string | undefined) {
        this._msdyn_salescontractline = value;
    };
    /**
     * Gets the msdyn_SalesContractLineId property value. 
     * @returns a salesorderdetail
     */
    public get msdyn_SalesContractLineId() {
        return this._msdyn_SalesContractLineId;
    };
    /**
     * Sets the msdyn_SalesContractLineId property value. 
     * @param value Value to set for the msdyn_SalesContractLineId property.
     */
    public set msdyn_SalesContractLineId(value: Salesorderdetail | undefined) {
        this._msdyn_SalesContractLineId = value;
    };
    /**
     * Gets the msdyn_startdatetime property value. 
     * @returns a Date
     */
    public get msdyn_startdatetime() {
        return this._msdyn_startdatetime;
    };
    /**
     * Sets the msdyn_startdatetime property value. 
     * @param value Value to set for the msdyn_startdatetime property.
     */
    public set msdyn_startdatetime(value: Date | undefined) {
        this._msdyn_startdatetime = value;
    };
    /**
     * Gets the msdyn_Task property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_Task() {
        return this._msdyn_Task;
    };
    /**
     * Sets the msdyn_Task property value. 
     * @param value Value to set for the msdyn_Task property.
     */
    public set msdyn_Task(value: Msdyn_projecttask | undefined) {
        this._msdyn_Task = value;
    };
    /**
     * Gets the msdyn_TransactionCategory property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_TransactionCategory() {
        return this._msdyn_TransactionCategory;
    };
    /**
     * Sets the msdyn_TransactionCategory property value. 
     * @param value Value to set for the msdyn_TransactionCategory property.
     */
    public set msdyn_TransactionCategory(value: Msdyn_transactioncategory | undefined) {
        this._msdyn_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_transactionclassification property value. 
     * @returns a integer
     */
    public get msdyn_transactionclassification() {
        return this._msdyn_transactionclassification;
    };
    /**
     * Sets the msdyn_transactionclassification property value. 
     * @param value Value to set for the msdyn_transactionclassification property.
     */
    public set msdyn_transactionclassification(value: number | undefined) {
        this._msdyn_transactionclassification = value;
    };
    /**
     * Gets the msdyn_transactiontypecode property value. 
     * @returns a integer
     */
    public get msdyn_transactiontypecode() {
        return this._msdyn_transactiontypecode;
    };
    /**
     * Sets the msdyn_transactiontypecode property value. 
     * @param value Value to set for the msdyn_transactiontypecode property.
     */
    public set msdyn_transactiontypecode(value: number | undefined) {
        this._msdyn_transactiontypecode = value;
    };
    /**
     * Gets the msdyn_Unit property value. 
     * @returns a uom
     */
    public get msdyn_Unit() {
        return this._msdyn_Unit;
    };
    /**
     * Sets the msdyn_Unit property value. 
     * @param value Value to set for the msdyn_Unit property.
     */
    public set msdyn_Unit(value: Uom | undefined) {
        this._msdyn_Unit = value;
    };
    /**
     * Gets the msdyn_UnitSchedule property value. 
     * @returns a uomschedule
     */
    public get msdyn_UnitSchedule() {
        return this._msdyn_UnitSchedule;
    };
    /**
     * Sets the msdyn_UnitSchedule property value. 
     * @param value Value to set for the msdyn_UnitSchedule property.
     */
    public set msdyn_UnitSchedule(value: Uomschedule | undefined) {
        this._msdyn_UnitSchedule = value;
    };
    /**
     * Gets the msdyn_vendortype property value. 
     * @returns a integer
     */
    public get msdyn_vendortype() {
        return this._msdyn_vendortype;
    };
    /**
     * Sets the msdyn_vendortype property value. 
     * @param value Value to set for the msdyn_vendortype property.
     */
    public set msdyn_vendortype(value: number | undefined) {
        this._msdyn_vendortype = value;
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
        writer.writeStringValue("_msdyn_accountcustomer_value", this._msdyn_accountcustomer_value);
        writer.writeStringValue("_msdyn_accountvendor_value", this._msdyn_accountvendor_value);
        writer.writeStringValue("_msdyn_bookableresource_value", this._msdyn_bookableresource_value);
        writer.writeStringValue("_msdyn_contactcustomer_value", this._msdyn_contactcustomer_value);
        writer.writeStringValue("_msdyn_contactvendor_value", this._msdyn_contactvendor_value);
        writer.writeStringValue("_msdyn_contractorganizationalunitid_value", this._msdyn_contractorganizationalunitid_value);
        writer.writeStringValue("_msdyn_journal_value", this._msdyn_journal_value);
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
        writer.writeStringValue("_msdyn_resourceorganizationalunitid_value", this._msdyn_resourceorganizationalunitid_value);
        writer.writeStringValue("_msdyn_salescontract_value", this._msdyn_salescontract_value);
        writer.writeStringValue("_msdyn_salescontractlineid_value", this._msdyn_salescontractlineid_value);
        writer.writeStringValue("_msdyn_task_value", this._msdyn_task_value);
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_msdyn_unitschedule_value", this._msdyn_unitschedule_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Account>("msdyn_AccountCustomer", this.msdyn_AccountCustomer);
        writer.writeDateValue("msdyn_accountingdate", this.msdyn_accountingdate);
        writer.writeObjectValue<Account>("msdyn_AccountVendor", this.msdyn_AccountVendor);
        writer.writeNumberValue("msdyn_amount", this.msdyn_amount);
        writer.writeNumberValue("msdyn_amount_base", this.msdyn_amount_base);
        writer.writeNumberValue("msdyn_amountmethod", this.msdyn_amountmethod);
        writer.writeNumberValue("msdyn_basisamount", this.msdyn_basisamount);
        writer.writeNumberValue("msdyn_basisamount_base", this.msdyn_basisamount_base);
        writer.writeNumberValue("msdyn_basisprice", this.msdyn_basisprice);
        writer.writeNumberValue("msdyn_basisprice_base", this.msdyn_basisprice_base);
        writer.writeNumberValue("msdyn_basisquantity", this.msdyn_basisquantity);
        writer.writeNumberValue("msdyn_billingstatus", this.msdyn_billingstatus);
        writer.writeNumberValue("msdyn_billingtype", this.msdyn_billingtype);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresource", this.msdyn_bookableresource);
        writer.writeObjectValue<Contact>("msdyn_ContactCustomer", this.msdyn_ContactCustomer);
        writer.writeObjectValue<Contact>("msdyn_ContactVendor", this.msdyn_ContactVendor);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_contractorganizationalunitid", this.msdyn_contractorganizationalunitid);
        writer.writeNumberValue("msdyn_customertype", this.msdyn_customertype);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeDateValue("msdyn_documentdate", this.msdyn_documentdate);
        writer.writeDateValue("msdyn_enddatetime", this.msdyn_enddatetime);
        writer.writeDateValue("msdyn_exchangeratedate", this.msdyn_exchangeratedate);
        writer.writeStringValue("msdyn_externaldescription", this.msdyn_externaldescription);
        writer.writeBooleanValue("msdyn_isposted", this.msdyn_isposted);
        writer.writeObjectValue<Msdyn_journal>("msdyn_Journal", this.msdyn_Journal);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_journalline_Annotations", this.msdyn_journalline_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_journalline_AsyncOperations", this.msdyn_journalline_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_journalline_BulkDeleteFailures", this.msdyn_journalline_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_journalline_DuplicateBaseRecord", this.msdyn_journalline_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_journalline_DuplicateMatchingRecord", this.msdyn_journalline_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_journalline_MailboxTrackingFolders", this.msdyn_journalline_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_journalline_PrincipalObjectAttributeAccesses", this.msdyn_journalline_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_journalline_ProcessSession", this.msdyn_journalline_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_journalline_SyncErrors", this.msdyn_journalline_SyncErrors);
        writer.writeStringValue("msdyn_journallineid", this.msdyn_journallineid);
        writer.writeCollectionOfObjectValues<Msdyn_projectapproval>("msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline", this.msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline);
        writer.writeNumberValue("msdyn_percent", this.msdyn_percent);
        writer.writeNumberValue("msdyn_price", this.msdyn_price);
        writer.writeNumberValue("msdyn_price_base", this.msdyn_price_base);
        writer.writeObjectValue<Pricelevel>("msdyn_PriceList", this.msdyn_PriceList);
        writer.writeObjectValue<Product>("msdyn_Product", this.msdyn_Product);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeNumberValue("msdyn_quantity", this.msdyn_quantity);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_ResourceCategory", this.msdyn_ResourceCategory);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_ResourceOrganizationalUnitId", this.msdyn_ResourceOrganizationalUnitId);
        writer.writeObjectValue<Salesorder>("msdyn_SalesContract", this.msdyn_SalesContract);
        writer.writeStringValue("msdyn_salescontractline", this.msdyn_salescontractline);
        writer.writeObjectValue<Salesorderdetail>("msdyn_SalesContractLineId", this.msdyn_SalesContractLineId);
        writer.writeDateValue("msdyn_startdatetime", this.msdyn_startdatetime);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_Task", this.msdyn_Task);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_TransactionCategory", this.msdyn_TransactionCategory);
        writer.writeNumberValue("msdyn_transactionclassification", this.msdyn_transactionclassification);
        writer.writeNumberValue("msdyn_transactiontypecode", this.msdyn_transactiontypecode);
        writer.writeObjectValue<Uom>("msdyn_Unit", this.msdyn_Unit);
        writer.writeObjectValue<Uomschedule>("msdyn_UnitSchedule", this.msdyn_UnitSchedule);
        writer.writeNumberValue("msdyn_vendortype", this.msdyn_vendortype);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
